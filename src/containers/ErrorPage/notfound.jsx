// @flow

import React from 'react';
import styled from 'styled-components';

const NotFoundDiv = styled.div`
  text-align: center;
`;

const NotFound = ({
  location: {
    pathname,
  } = {},
}: {
  location: {
    pathname: string,
  }
}) => (
  <NotFoundDiv>
    <h1>NOT FOUND</h1>
    <h3>We do not have this location</h3>
    <h2>{pathname}</h2>
    <h3>which you typed</h3>
  </NotFoundDiv>
);

export default NotFound;
