// @flow

import React from 'react';
import { Field } from 'redux-form';
import styled from 'styled-components';

const StyledField = styled(Field)`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  height: 1.5rem;
  min-width: 5rem;
  font-family: inherit;
`;

const Text = (props: Object) => (<StyledField
  component="input"
  type="text"
  { ...props }
/>);

const Select = ({ options, ...props }: {
  options: Array<{ value: any, text?: string }>,
}) => (
  <StyledField
    component="select"
    { ...props }
  >
  {
    options && options.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)  
  }
  </StyledField>
);

const Checkbox = (props: Object) => (
  <Field
    component="input"
    type="checkbox"
    { ...props }
  />
);

const CustomField = {
  Text,
  Select,
  Checkbox,
};

export default CustomField;