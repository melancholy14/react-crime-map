import {
  LOAD_AVAILABILITY_SUCCESS,
  LOAD_AVAILABILITY_FAILURE,
  LOAD_CRIME_CATEGORY_SUCCESS,
  LOAD_CRIME_CATEGORY_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './actions';

const initialState = {
  availability: [],
  category: [],
  crimes: [],
  message: null,
  loading: false,
};

export default function searchReducer(state = initialState, action) {
  switch(action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        ...action.params,
        loading: true,
      };
    case LOAD_AVAILABILITY_SUCCESS:
      return {
        ...state,
        availability: action.data,
      };
    case LOAD_CRIME_CATEGORY_SUCCESS:
      return {
        ...state,
        category: action.data,
      };
    case SEARCH_SUCCESS:
      return {
        ...state,
        crimes: action.data,
        loading: false,
      };
    case LOAD_AVAILABILITY_FAILURE:
    case LOAD_CRIME_CATEGORY_FAILURE:
    case SEARCH_FAILURE:
      return {
        ...state,
        message: action.message,
        loading: false,
      };
    default:
      return state;
  }
}