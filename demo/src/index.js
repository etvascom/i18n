import React, { useState } from 'react'
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

const Demo = () => {
  const [lang, setLang] = useState('en')

  return (
    <I18nProvider i18nService={i18nService}>
      <div>
        <h1>i18n Demo</h1>
        <h2>Language selector</h2>
        <p>
          This component allows you to have a way for the user to select a
          language but not changing the UI language. To be used in forms.
        </p>
        <LanguageSelector onChange={setLang} value={lang} />
        <p>Selected language: {lang}</p>
        <h2>Language switcher</h2>
        <p>This one changes the language across the app</p>
        <LanguageSwitcher />
        <h2>The T component</h2>
        <p>Use this component to display translated strings</p>
        <p>
          The label <code>hello</code> doesn't have DE translations. It will
          fallback to <em>en</em>. <br />
          Hello translated:
          <strong>
            <T label='hello' />
          </strong>
        </p>
        <p>
          <button>
            <T label='save' />
          </button>
        </p>
        <h3>Render function</h3>
        Sometimes you need the translation as a string to pass it to props like{' '}
        <code>img.alt</code>
        or other situations where a <code>ReactNode</code> just won't do.
        <T>
          {({ translate }) => (
            <>
              <p>
                As a title for an anchor:{' '}
                <a
                  href='google.com'
                  target='_blank'
                  title={translate('hello-world')}>
                  Hover me
                </a>
              </p>
              <p>
                As alt text for an image:
                <img src='unknown' alt={translate('hello-world')} />
              </p>
            </>
          )}
        </T>
        <h3>Display current language</h3>
        <p>
          You can also use <code>T</code> to display current language
        </p>
        <T>
          {({ language }) => <p>Current language across app: {language}</p>}
        </T>
      </div>
    </I18nProvider>
  )
}

render(<Demo />, document.querySelector('#demo'))
