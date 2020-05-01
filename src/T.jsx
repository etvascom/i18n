import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { I18nContext } from './I18nProvider'

export const T = ({ label, args, children }) => {
  const { translate, language, languages } = useContext(I18nContext)

  if (children) {
    if (typeof children === 'function') {
      return children({ translate, language, languages })
    } else {
      console.warn('Invalid children passed. Only render function allowed')
    }
  }

  const value = useMemo(() => translate(label, args), [translate, args, label])

  return value
}

T.propTypes = {
  label: PropTypes.string,
  args: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  children: PropTypes.func
}
