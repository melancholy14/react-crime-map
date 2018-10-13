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
    latlng: {
      lat: 51.505,
      lng: -0.09,
    },
  }
};

function mapReducer(state = initialState.map, action){
  switch(action.type) {
    case SAVE_LOCATION:
      return {
        ...state,
        latlng: action.data,
      };
    case SEARCH_SUCCESS:
      return {
        ...state, 
        locations: Object.values(action.data.reduce((acc, ele) => {
          const {
            location: {
              latitude,
              longitude,
              street = {},
            } = {},
          } = ele;

          if (!acc[street.id]) {
            return {
              ...acc,
              [street.id]: {
                street,
                count: 1,
                latlng: [parseFloat(latitude), parseFloat(longitude)],
              },
            };
          } else {
            return {
              ...acc,
              [street.id]: {
                ...acc[street.id],
                count: acc[street.id].count + 1,
              },
            };
          }
        }, {})),
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