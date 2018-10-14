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

  aside {
    order: 1;
  }

  .map {
    order: 2;
    height: 32.5rem;
    z-index: 0;

    .leaflet-container {
      height: 100%;
      margin: 0.5rem;
      border-radius: 1.5rem;
    }
  }

  .analyse {
    order: 3;
    padding: 1rem;
  }
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <header>
          <div className="title">
            CRIME MAP
          </div>
          <div className="email">
            <span className="smaller">Contact me: melancholy14@hotmail.com</span>
          </div>
        </header>
        <aside>
          <Search />
        </aside>
        <main className="map">
          <LeafletMap />
        </main>
        <main className="analyse">
          <Analyse />
        </main>
      </AppDiv>
    );
  }
}

export default App;
