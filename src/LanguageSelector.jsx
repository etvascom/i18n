import React, { useMemo, useContext, useCallback } from 'react'
import PropTypes from 'prop-types'
import { Dropdown } from '@kogaio'
import { useField } from 'formik'
import { I18nContext } from './I18nProvider'

export const LanguageSelector = ({ onChange, value, ...props }) => {
  const handleChange = useCallback(value => onChange(value), [onChange])
  const { languages } = useContext(I18nContext)
  const languageIds = useMemo(() => Object.keys(languages), [languages])
  const label = languages[value]?.name

  return (
    <Dropdown {...props} onChange={handleChange} value={label}>
      {languageIds.map(id => (
        <Dropdown.Option key={id} value={id}>
          {languages[id].name}
        </Dropdown.Option>
      ))}
    </Dropdown>
  )
}

LanguageSelector.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string
}

export const LanguageField = props => {
  // eslint-disable-next-line
  const [field, _, { setValue }] = useField(props)

  const handleChange = useCallback(value => setValue(value), [setValue])

  return (
    <LanguageSelector
      {...props}
      onChange={handleChange}
      value={field.value}
      name={field.name}
    />
  )
}

export const LanguageSwitcher = () => {
  const { i18nService, language } = useContext(I18nContext)
  const handleChange = useCallback(
    value => i18nService.setSessionLanguage(value),
    [i18nService]
  )

  return <LanguageSelector onChange={handleChange} value={language} />
}
