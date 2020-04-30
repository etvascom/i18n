import Debug from 'debug'
const debug = Debug('etvas:i18n:cache')

export class DictionaryCache {
  constructor(url) {
    this.url = url
    this.cache = {}
  }

  async load(language, dictionary) {
    if (dictionary) {
      debug('loading local dictionary for %s', language)
      this.cache[language] = {
        dictionary,
        loaded: true,
        loading: false
      }

      return dictionary
    }

    const re = new RegExp('\\{lang\\}', 'g')
    const url = this.url.replace(re, language)

    this.cache[language] = {
      loaded: false,
      loading: true
    }

    debug('loading remote dictionary for %s from %s', language, url)
    const res = await fetch(url)
    const dict = await res.json()

    return this.load(language, dict)
  }

  isLoaded(language) {
    return this.cache[language] && this.cache[language].loaded
  }

  isLoading(language) {
    return this.cache[language] && this.cache[language].loading
  }

  get(language) {
    return this.isLoaded(language) ? this.cache[language].dictionary : undefined
  }
}
