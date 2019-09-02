// @flow

import React from 'react';

const Checkbox = ({
  id, name, checked, onChange, ...props
}: {
  id: string | number,
  name: string,
  checked: boolean,
  onChange: Function,
}) => (
  <input
    type="checkbox"
    name={name}
    id={id}
    onChange={onChange}
    checked={checked}
    {...props}
  />
);

export default Checkbox;
