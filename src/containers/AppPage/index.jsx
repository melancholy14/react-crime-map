// @flow

import React from 'react';
import styled from 'styled-components';

import Search from '../SearchPage';
import LeafletMap from '../MapPage';
import Analyse from '../AnalysePage';

const Div = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

const App = () => (
  <Div>
    <Search />
    <LeafletMap />
    <Analyse />
  </Div>
);

export default App;
