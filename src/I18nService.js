import EventEmitter from 'events'
import Debug from 'debug'

import { suffixRules } from './suffixRules'
import { DictionaryCache } from './DictionaryCache'

const debug = Debug('etvas:i18n')
const POST_MESSAGE_EVENT_CHANGE = 'etvas.i18n.change'
const POST_MESSAGE_EVENT_REQUEST = 'etvas.i18n.request'
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
    this.storage = options.storage ?? sessionStorage

    if (window.addEventListener) {
      window.addEventListener('message', this.handlePostMessage, false)
    } else if (window.attachEvent) {
      window.attachEvent('message', this.handlePostMessage, false)
    }
  }

  t(key, args, pluralBy) {
    return this.translate(key, this.language, args, pluralBy)
  }

  translate(key, language, args, pluralBy) {
    this.ensureSupportedLanguage(language)

    if (pluralBy) {
      return this.translateMarkedLabel(key, language, args, pluralBy)
    }

    return this.translateLabel(key, language, args)
  }

  translateLabel(key, language, args) {
    const dictionary = this.getDictionary(language)

    if (dictionary?.[key]) {
      return this.replacePlaceholders(dictionary[key], args)
    }

    console.warn(`i18n: No translation found for lang=${language} key=${key}`)
    return key
  }

  translateMarkedLabel(key, language, args, pluralBy) {
    const dictionary = this.getDictionary(language)
    const marked = args?.[pluralBy]

    const suffixRule = suffixRules.find(
      rule => dictionary?.[`${key}.${rule.suffix}`] && rule.condition(marked)
    )

    if (suffixRule) {
      return this.replacePlaceholders(
        dictionary[`${key}.${suffixRule.suffix}`],
        args
      )
    }

    return this.translateLabel(key, language, args)
  }

  replacePlaceholders(str, args) {
    if (!Array.isArray(args) && typeof args !== 'object') {
      return str
    }

    const keys = Object.keys(args)

    return keys.reduce(
      (t, key) => t.replace(new RegExp(`\\{${key}\\}`), args[key]),
      str
    )
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
    this.storage.setItem(this.options.sessionKey, language)
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

    this.requestLanguageFromParentFrame()

    const browserLang = browserLanguage().substr(0, 2)
    if (this.supportsLanguage(browserLang)) {
      debug(' * using value from browser: %s', browserLang)
      this.setLanguage(browserLang)
    }
  }

  getSessionLanguage() {
    const value = this.storage.getItem(this.options.sessionKey)
    return this.supportsLanguage(value) ? value : undefined
  }

  supportsLanguage(language) {
    return this.languages.some(({ id }) => id === language)
  }

  ensureSupportedLanguage(language) {
    if (!this.supportsLanguage(language)) {
      throw new Error(`Unsupported language: ${language}`)
    }
  }

  emitChange() {
    this.emit('change')
    this.notifyFrames()
  }

  notifyFrames() {
    const iframes = document.getElementsByTagName('iframe')
    Array.from(iframes).forEach(iframe =>
      iframe.contentWindow.postMessage(
        { event: POST_MESSAGE_EVENT_CHANGE, payload: this.language },
        '*'
      )
    )
  }
  requestLanguageFromParentFrame() {
    if (window.parent) {
      window.parent.postMessage({ event: POST_MESSAGE_EVENT_REQUEST }, '*')
    }
  }

  handlePostMessage = ({ data }) => {
    switch (data.event) {
      case POST_MESSAGE_EVENT_CHANGE: {
        this.setLanguage(data.payload)
        return
      }

      case POST_MESSAGE_EVENT_REQUEST: {
        this.notifyFrames()
        return
      }
    }
  }
}
