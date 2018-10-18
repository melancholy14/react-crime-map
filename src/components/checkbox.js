import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ id, value, checked, className, onChange }) => (
  <input
    type="checkbox"
    id={id}
    value={value}
    onChange={onChange}
    checked={checked}
    className={className}
  />
)

Checkbox.propTypes = {
  id: PropTypes.string,
  value: PropTypes.any,
  checked: PropTypes.bool,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Checkbox;