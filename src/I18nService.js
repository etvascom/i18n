import EventEmitter from 'events'
import Debug from 'debug'

import { DictionaryCache } from './DictionaryCache'

const debug = Debug('etvas:i18n')

const browserLanguage = () =>
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage

export class I18nService extends EventEmitter {
  constructor(languages, options) {
    super()
    this.languages = languages
    this.options = options
    this.dictionaries = new DictionaryCache(options.dictionaryUrl)
    this.language = options.defaultLanguage
  }

  t(label, args) {
    return this.translate(label, this.language, args)
  }

  translate(label, language, args) {
    this.ensureSupportedLanguage(language)

    const dictionary = this.getDictionary(language)

    if (dictionary && dictionary[label]) {
      // replace placeholders
      return dictionary[label]
    } else if (language !== this.options.defaultLanguage) {
      console.warn(
        `i18n: Using fallback language translation for: lang=${language} label=${label}`
      )
      return this.translate(label, this.options.defaultLanguage, args)
    }

    console.warn(
      `i18n: No translation found for lang=${language} label=${label}`
    )
    return `${language}: ${label}`
  }

  getDictionary(language) {
    return this.dictionaries.get(language)
  }

  async loadDictionary(language, dictionary) {
    if (
      !(
        this.dictionaries.isLoading(language) ||
        this.dictionaries.isLoaded(language)
      )
    ) {
      debug('loadDictionary for %s', language)
      await this.dictionaries.load(language, dictionary)
      debug('dictionary loaded for %s', language)
      this.emitChange()
    }
  }

  setLanguage(language) {
    this.ensureSupportedLanguage(language)
    this.loadDictionary(language)

    if (language !== this.language) {
      debug('setLanguage(): change language to %s', language)
      this.language = language
      this.emitChange()
    }
  }

  setSessionLanguage(language) {
    this.setLanguage(language)
    sessionStorage.setItem(this.options.sessionKey, language)
  }

  autodetectLanguage(userLanguage) {
    const sessionLanguage = this.getSessionLanguage()
    debug('autodetecting language. user language: %s', userLanguage)
    if (sessionLanguage) {
      debug(' * using value from session:  %s', sessionLanguage)
      return this.setLanguage(sessionLanguage)
    }

    if (userLanguage && this.supportsLanguage(userLanguage)) {
      debug(' * using value from user profile: %s', userLanguage)
      return this.setLanguage(userLanguage)
    }

    const browserLang = browserLanguage().substr(0, 2)
    if (this.supportsLanguage(browserLang)) {
      debug(' * using value from browser: %s', browserLang)
      this.setLanguage(browserLang)
    }
  }

  getSessionLanguage() {
    const value = sessionStorage.getItem(this.options.sessionKey)
    return this.supportsLanguage(value) ? value : undefined
  }

  supportsLanguage(language) {
    return true
  }

  ensureSupportedLanguage(language) {
    if (!this.supportsLanguage(language)) {
      throw new Error(`Unsupported language: ${language}`)
    }
  }

  emitChange() {
    this.emit('change')
  }
}