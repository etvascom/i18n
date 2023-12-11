import { createContext, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import { I18nService } from './I18nService'

export const I18nContext = createContext()

const makeCtx = i18nService => ({
  i18nService,
  language: i18nService.language,
  languages: i18nService.languages,
  translate: i18nService.t.bind(i18nService),
})

export const I18nProvider = ({ children, i18nService, authContext }) => {
  const { currentUser } = authContext
    ? useContext(authContext)
    : { currentUser: undefined }
  const [ctx, setCtx] = useState(makeCtx(i18nService))

  useEffect(
    () => i18nService.autodetectLanguage(currentUser?.locale),
    [currentUser, i18nService],
  )

  useEffect(() => {
    const handler = () => {
      setCtx(makeCtx(i18nService))
    }
    i18nService.on('change', handler)
    return () => i18nService.removeListener('change', handler)
  }, [i18nService, setCtx])

  return <I18nContext.Provider value={ctx}>{children}</I18nContext.Provider>
}

I18nProvider.propTypes = {
  children: PropTypes.node,
  i18nService: PropTypes.instanceOf(I18nService),
  authContext: PropTypes.object,
}
