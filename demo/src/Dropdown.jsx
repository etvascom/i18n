import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

export const Dropdown = ({ value, options, onChange }) => {
  const handleChange = useCallback(
    ev => onChange && onChange(ev.target.value),
    [onChange]
  )

  return (
    <select onChange={handleChange} value={value}>
      {(options || []).map(({ id, label }) => (
        <option key={id} value={id}>
          {label}
        </option>
      ))}
    </select>
  )
}

Dropdown.propTypes = {
  value: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string
    })
  ),
  onChange: PropTypes.func
}
