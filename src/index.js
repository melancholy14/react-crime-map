/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';

import App from './containers/AppPage';

import reducers from './containers/reducers';
import sagas from './containers/sagas';

import * as serviceWorker from './serviceWorker';

const saga = createSagaMiddleware();

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(sagas);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
