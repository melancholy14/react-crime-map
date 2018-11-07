// @flow

import React from 'react';

import styled from 'styled-components';

const DefaultSelect = styled.select`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  height: 1.5rem;
  min-width: 5rem;
  background-color: white;
  font-family: inherit;
`;

const Select = ({ id, value, options, onChange, className }: {
  id: string | number,
  value: string | number,
  className: string,
  options: Array<{ value: any, text?: string }>,
  onChange: Function,
}) => 
(<DefaultSelect id={id} onChange={onChange} value={value} className={className}>
  {
    options && options.map(({value: val, text = val}) => <option key={val} value={val}>{text}</option>)
  }
</DefaultSelect>);

export default Select;
