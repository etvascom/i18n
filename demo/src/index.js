import React, { useState } from 'react'
import { render } from 'react-dom'

import { I18nProvider, T, I18nService } from '../../src'
import { LanguageSwitcher, LanguageSelector } from './LanguageSwitcher'
import { languages } from './languages'
import en from './dictionaries/en'
import { IframeDemo, TDemo } from './demos'
import { Section } from './components'
import './Demo.scss'

const i18nService = new I18nService(languages, {
  sessionKey: 'etvas.i18n.lib',
  defaultLanguage: 'en',
  dictionaryUrl: '/{lang}.json'
})

i18nService.loadDictionary('en', en)

const Demo = () => {
  const [lang, setLang] = useState('en')
  const [iframe, setIframe] = useState(false)

  return (
    <I18nProvider i18nService={i18nService}>
      <h1>i18n Demo</h1>
      <div className='demos'>
        <div className='column'>
          <Section title='T component' open>
            <TDemo />
          </Section>
        </div>
        <div className='column'>
          <Section title='Language switcher' open>
            <p>This one changes the language across the app</p>
            <LanguageSwitcher />
          </Section>
          <Section title='Language selector'>
            <p>
              This component allows you to have a way for the user to select a
              language but not changing the UI language. To be used in forms.
            </p>
            <LanguageSelector onChange={setLang} value={lang} />
            <p>Selected language: {lang}</p>
          </Section>

          <Section title='Nested apps'>
            <IframeDemo />
          </Section>
        </div>
      </div>
    </I18nProvider>
  )
}

render(<Demo />, document.querySelector('#demo'))
