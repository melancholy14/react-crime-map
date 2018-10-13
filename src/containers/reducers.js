import { combineReducers } from 'redux';

import mapReducer from './MapPage/reducer';
import searchReducer from './SearchPage/reducer';

export default combineReducers({
  map: mapReducer,
  search: searchReducer,
});