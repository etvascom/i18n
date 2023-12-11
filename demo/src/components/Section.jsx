import { useState } from 'react'
import PropTypes from 'prop-types'
import './Section.scss'

export const Section = ({ title, children, open }) => {
  const [isOpen, setOpen] = useState(open)

  return (
    <div className='section'>
      <div className='wrapper'>
        <h2 onClick={() => setOpen(!isOpen)}>{title}</h2>
        {isOpen && children}
      </div>
    </div>
  )
}

Section.propTypes = {
  open: PropTypes.bool,
  title: PropTypes.node,
  children: PropTypes.node,
}
