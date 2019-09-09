// @flow

import { combineReducers } from 'redux';

import searchReducer from './SearchPage/reducer';
import mapReducer from './MapPage/reducer';
import analyseReducer from './AnalysePage/reducer';

export default combineReducers({
  map: mapReducer,
  search: searchReducer,
  analyse: analyseReducer,
});
