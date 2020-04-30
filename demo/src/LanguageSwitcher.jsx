import React from 'react'
import { Dropdown } from './Dropdown'
import { withLanguages, withLanguageSwitcher } from '../../src'

export const LanguageSelector = withLanguages(({ languages, ...props }) => (
  <Dropdown
    options={languages.map(({ id, name }) => ({
      id,
      label: name
    }))}
    {...props}
  />
))

export const LanguageSwitcher = withLanguageSwitcher(LanguageSelector)
