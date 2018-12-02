// @flow

import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

// import Header from './header';
// import Search from '../SearchPage/page';
// import LeafletMap from '../MapPage/page';
// import Analyse from '../AnalysePage/page';

const Header = lazy(() => import('./header'));
const Search = lazy(() => import('../SearchPage'));
const LeafletMap = lazy(() => import('../MapPage'));
const Analyse = lazy(() => import('../AnalysePage'));

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
