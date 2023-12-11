import PropTypes from 'prop-types'
import { Light } from 'react-syntax-highlighter'
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript'
import docco from 'react-syntax-highlighter/dist/esm/styles/hljs/docco'

Light.registerLanguage('javascript', js)

export const Code = ({ children }) => (
  <Light language='javascript' style={docco}>
    {children}
  </Light>
)

Code.propTypes = {
  children: PropTypes.string,
}
