import { combineReducers } from 'redux';

import {
  LOAD_AVAILABILITY_SUCCESS,
  LOAD_AVAILABILITY_FAILURE,
  LOAD_CRIME_CATEGORY_SUCCESS,
  LOAD_CRIME_CATEGORY_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SAVE_LOCATION,
} from './actions';

const initialState = {
  search: {
    availability: [],
    crimeCategory: [],
    message: null,
  },
  map: {
    latlng: {},
  }
};

function mapReducer(state = initialState.map, action){
  switch(action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        latlng: action.data,
      };
    default:
      return state;
  }
}

function searchReducer(state = initialState.search, action) {
  switch(action.type) {
    case LOAD_AVAILABILITY_SUCCESS:
      return {
        ...state,
        availability: action.data,
      };
    case LOAD_CRIME_CATEGORY_SUCCESS:
      return {
        ...state,
        crimeCategory: action.data,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        crimes: action.data,
      };
    case LOAD_AVAILABILITY_FAILURE:
    case LOAD_CRIME_CATEGORY_FAILURE:
    case SEARCH_FAILURE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
}

export default combineReducers({
  map: mapReducer,
  search: searchReducer,
});