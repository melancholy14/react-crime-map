import {
  LOAD_AVAILABILITY_SUCCESS,
  LOAD_AVAILABILITY_FAILURE,
  LOAD_CRIME_CATEGORY_SUCCESS,
  LOAD_CRIME_CATEGORY_FAILURE,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './actions';

const initialState = {
  availability: [],
  crimeCategory: [],
  message: null,
};

export default function searchReducer(state = initialState, action) {
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