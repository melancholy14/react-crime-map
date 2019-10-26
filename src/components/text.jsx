// @flow
import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    border: 1px solid grey;
    border-radius: 0.5rem;
    padding: 0.5rem;
`;

const Text = ({ children }: { children?: any }) => <StyledDiv>{ children }</StyledDiv>;
Text.defaultProps = {
  children: null,
};

export default Text;
