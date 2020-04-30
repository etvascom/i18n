import React, { Component } from 'react'
import { render } from 'react-dom'

import { I18nProvider, T, I18nService } from '../../src'
import { LanguageSwitcher, LanguageSelector } from './LanguageSwitcher'
import { languages } from './languages'
import en from './dictionaries/en'

const i18nService = new I18nService(languages, {
  sessionKey: 'etvas.i18n.lib',
  defaultLanguage: 'en',
  dictionaryUrl: '/{lang}.json'
})

i18nService.loadDictionary('en', en)

export default class Demo extends Component {
  render() {
    return (
      <I18nProvider i18nService={i18nService}>
        <div>
          <h1>i18n Demo</h1>
          <LanguageSwitcher />
          <p>
            Hello translated: <T label='hello' />
          </p>
          <div>
            <button>
              <T label='save' />
            </button>
          </div>
        </div>
      </I18nProvider>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
