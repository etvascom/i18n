import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { I18nContext } from './I18nProvider'

export const T = ({ label, args, mark, children }) => {
  const { translate, language, languages } = useContext(I18nContext)

  if (children) {
    if (typeof children === 'function') {
      return children({ translate, language, languages })
    } else {
      console.warn('Invalid children passed. Only render function allowed')
    }
  }

  const value = useMemo(
    () => translate(label, args, mark),
    [translate, args, label, mark]
  )

  return value
}

T.propTypes = {
  label: PropTypes.string,
  args: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  mark: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.func,
}
