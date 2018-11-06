// @flow

import React, { Component } from 'react';
import styled from 'styled-components';

import Search from './SearchPage/page';
import LeafletMap from './MapPage/page';
import Analyse from './AnalysePage/page';

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;

  header {
    order: 0;
    background: darkslateblue;
    color: yellow;
    line-height: 2rem;
    height: 4rem;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;

    .title {
      text-align: center;
      font-size: larger;
      font-weight: bolder;
    }

    .email {
      text-align: right;
      padding: 0 1rem;
      font-size: small;
    }
  }
`;

type Props = {};

class App extends Component<Props> {
  render() {
    return (
      <AppDiv>
        <header>
          <div className="title">
            CRIME MAP
          </div>
          <div className="email">
            <span className="smaller">Contact me: melancholy8914@gmail.com</span>
          </div>
        </header>
        <Search />
        <LeafletMap />
        <Analyse />
      </AppDiv>
    );
  }
}

export default App;
