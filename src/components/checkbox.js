// @flow

import React from 'react';

const Checkbox = ({ id, value, checked, className, onChange }: {
  id: string,
  value: string | number,
  checked: boolean,
  className: string,
  onChange: Function,
}) => (
  <input
    type="checkbox"
    id={id}
    value={value}
    onChange={onChange}
    checked={checked}
    className={className}
  />
);

export default Checkbox;