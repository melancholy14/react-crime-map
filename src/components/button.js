// @flow

import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  background-color: black;
  color: white;
  font-weight: bolder;
  padding: 0.3rem 1rem;
  border: 0;
  border-radius: 0.5rem;
  min-height: 1.5rem;
`;

const Button = ({ onClick, className, children }: { onClick: Function, className: string, children: any }) => (
  <DefaultButton onClick={onClick} className={className}>
    { children }
  </DefaultButton>
);

export default Button;