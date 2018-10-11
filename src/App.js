import React, { Component } from 'react';
import styled from 'styled-components';

import LeafletMap from './leafletMap';
import Search from './search';

// import './App.css';

const AppDiv = styled.div`
  display: grid;
  grid-template-rows: 2rem auto;

  header {
    background: darkslateblue;
    color: yellow;
    height: 2rem;
    line-height: 2rem;
    vertical-align: middle;
    padding: 0;
    margin: 0;
    text-align: center;
    position: relative;

    .title {
      position: absolute;
      left: 1rem;
      font-size: larger;
      font-weight: bolder;
    }

    .email {
      position: absolute;
      right: 1rem;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    height: 47rem;
  }

  .leaflet-container {
    height: 100%;
    order: 2;
    margin: 1rem;
    border-radius: 1rem;
  }
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <header>
          <div className="title">
            CRIME-MAP
          </div>
          <div className="email">
            <span className="smaller">If you have something to ask, please send me an email to melancholy14@hotmail.com</span>
          </div>
        </header>
        <main>
          <Search />
          <LeafletMap />
        </main>
      </AppDiv>
    );
  }
}

export default App;
