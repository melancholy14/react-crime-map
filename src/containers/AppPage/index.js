// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './header';
import Search from '../SearchPage/page';
import LeafletMap from '../MapPage/page';
import Analyse from '../AnalysePage/page';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <AppDiv>
        <Header />
        <Search />
        <LeafletMap />
        <Analyse />
      </AppDiv>
    );
  }
}

export default App;
