// @flow

import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

const SelectField = styled(Field)`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  height: 1.5rem;
  min-width: 5rem;
  background-color: white;
  font-family: inherit;
`;

const Select = ({ id, name, value, options, onChange, className, ...props }: {
  id: string | number,
  name: string,
  value: string | number,
  className: string,
  options: Array<{ value: any, text?: string }>,
  onChange: Function,
}) => (
  <SelectField
    component="select"
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    className={className}
  >
  {
    options && options.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)  
  }
  </SelectField>
);

export default Select;
