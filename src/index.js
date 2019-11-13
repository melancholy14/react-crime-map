/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import styled from 'styled-components';
import './index.css';

import Header from './containers/HeaderPage';
import App from './containers/AppPage';
import NotFound from './containers/ErrorPage/notfound';

import reducers from './containers/reducers';
import sagas from './containers/sagas';

import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(sagas);

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

ReactDOM.render(
  <Provider store={store}>
    <AppDiv>
      <Header />
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={App} />
          {/* <Route path="/react-crime-map" component={App} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppDiv>
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
