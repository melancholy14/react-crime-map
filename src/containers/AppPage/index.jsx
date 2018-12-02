// @flow

import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Search from '../SearchPage';
import LeafletMap from '../MapPage';
import Analyse from '../AnalysePage';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const App = () => (
  <AppDiv>
    <Header />
    <Search />
    <LeafletMap />
    <Analyse />
  </AppDiv>
);

export default App;
