// @flow

import { combineReducers } from 'redux';

import searchReducer from './SearchPage/reducer';
import mapReducer from './MapPage/reducer';
import analyseReducer from './AnalysePage/reducer';

import { reducer as formReducer } from 'redux-form';

export default combineReducers({
  map: mapReducer,
  search: searchReducer,
  analyse: analyseReducer,
  form: formReducer,
});