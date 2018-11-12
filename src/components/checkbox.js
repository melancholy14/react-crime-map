// @flow

import React from 'react';
import { Field } from 'redux-form';

const Checkbox = ({ id, name, checked, className, onChange, ...props }: {
  id: string | number,
  name: string,
  checked: boolean,
  className: string,
  onChange: Function,
}) => (
  <Field
    component="input"
    type="checkbox"
    name={name}
    id={id}
    onChange={onChange}
    checked={checked}
  />
);

export default Checkbox;