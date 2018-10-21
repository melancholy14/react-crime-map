// @flow

import {
  LOAD_AVAILABILITY_SUCCESS,
  LOAD_AVAILABILITY_FAILURE,
  LOAD_CRIME_CATEGORY_SUCCESS,
  LOAD_CRIME_CATEGORY_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from './actions';

type State = {
  +availability: Array<{
    date: string,
  }>,
  +category: Array<{
    url: string,
    name: string,
  }>,
  +crimes: Array<mixed>,
  +message: string,
  +loading: boolean,
}

type Action = {
  type: string,
  data?: any,
  message?: string,
};

const initialState = {
  availability: [],
  category: [],
  crimes: [],
  message: '',
  loading: false,
};

export default function searchReducer(state: State = initialState, action: Action): State {
  switch(action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        ...action.data,
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