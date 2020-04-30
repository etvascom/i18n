import React, { useMemo, useContext, useCallback } from 'react'
import { I18nContext } from './I18nProvider'

export const withLanguages = Selector => props => {
  const { languages } = useContext(I18nContext)

  return <Selector languages={languages} {...props} />
}

export const withLanguageSwitcher = Selector => props => {
  const { i18nService, language } = useContext(I18nContext)

  const handleChange = useCallback(
    value => i18nService.setSessionLanguage(value),
    [i18nService]
  )

  return <Selector onChange={handleChange} value={language} {...props} />
}
