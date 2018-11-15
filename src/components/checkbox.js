// @flow

import React from 'react';

const Checkbox = ({ id, name, checked, className, onChange, ...props }: {
  id: string | number,
  name: string,
  checked: boolean,
  className: string,
  onChange: Function,
}) => (
  <input
    type="checkbox"
    name={name}
    id={id}
    onChange={onChange}
    checked={checked}
  />
);

export default Checkbox;