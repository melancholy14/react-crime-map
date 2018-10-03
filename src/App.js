import React, { Component } from 'react';
import LeafletMap from './leafletMap';
import Search from './search';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          CRIME-MAP
        </header>
        <main>
          <LeafletMap />
          <Search />
        </main>
        <footer>
          <span>If you have something to ask, please send me an email to melancholy14@hotmail.com</span>
        </footer>
      </div>
    );
  }
}

export default App;
