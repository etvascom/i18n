import React from 'react'
import { Dropdown } from './Dropdown'
import { withLanguages, withLanguageSwitcher } from '../../src'

export const LanguageSelector = withLanguages(({ languages, ...props }) => (
  <Dropdown
    options={Object.keys(languages).map(id => ({
      id,
      label: languages[id].name
    }))}
    {...props}
  />
))

export const LanguageSwitcher = withLanguageSwitcher(LanguageSelector)
