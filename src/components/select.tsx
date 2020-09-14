// @flow

import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
  border: 1px solid lightgray;
  border-radius: 0.5rem;
  height: 1.5rem;
  min-width: 5rem;
  background-color: white;
  font-family: inherit;
`;

const Select = ({
  id, name, value, options, onChange, className, ...props
}: {
  id?: string | number,
  name?: string,
  value: string | number,
  className?: string,
  options: Array<{ value: any, text?: string }>,
  onChange: Function,
}) => (
  <StyledSelect
    id={id}
    name={name}
    onChange={onChange}
    value={value}
    className={className}
    {...props}
  >
    {
    options && options.map(
      ({ value: val, text = val }) => (<option key={val} value={val}>{text}</option>),
    )}
  </StyledSelect>
);

Select.defaultProps = {
  id: '',
  name: '',
  className: '',
};

export default Select;
