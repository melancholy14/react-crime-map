// @flow
import update from 'immutability-helper';

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
    /*
      return update(state, {
        $merge: {
          ...action.data,
          loading: true
        }
      });
      */
     return update(state, {
       loading: {$set: true}
     });
    case LOAD_AVAILABILITY_SUCCESS:
      return update(state, {
        availability: {$set: action.data}
      });
    case LOAD_CRIME_CATEGORY_SUCCESS:
      return update(state, {
        category: {$set: action.data},
      });
    case SEARCH_SUCCESS:
      return update(state, {
        crimes: {$set: action.data},
        loading: {$set: false},
      });
    case LOAD_AVAILABILITY_FAILURE:
    case LOAD_CRIME_CATEGORY_FAILURE:
      return update(state, {
        message: {$set: action.message}
      });
    case SEARCH_FAILURE:
      return update(state, {
        message: {$set: action.message},
        loading: {$set: false},
      });
    default:
      return state;
  }
}
