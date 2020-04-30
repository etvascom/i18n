import { useContext, useMemo } from 'react'
import PropTypes from 'prop-types'
import { I18nContext } from './I18nProvider'

export const T = ({ label, args }) => {
  const { translate } = useContext(I18nContext)
  const value = useMemo(() => translate(label, args), [translate, args, label])

  return value
}

T.propTypes = {
  label: PropTypes.string,
  args: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}
