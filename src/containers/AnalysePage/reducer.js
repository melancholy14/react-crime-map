// @flow

import update from 'immutability-helper';

import {
  LOAD_GRAPHS_SUCCESS,
  LOAD_GRAPHS_FAILURE,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
  SAVE_STREET_DATA,
} from './actions';

import {
  AnalyseReducerState as State,
  Action,
} from '../../utils/types';

const initialState = {
  graph: {
    date: [],
    category: [],
    outcome: [],
  },
  street: {},
  news: [],
  message: '',
}

export default function analyseReducer(state: State = initialState, action: Action): State {
  switch(action.type){
    case LOAD_GRAPHS_SUCCESS:
      return update(state, {
        graph: {$set: action.data}
      });
    case LOAD_NEWS_SUCCESS:
      return update(state, {
        news: {$set: action.data},
      });
    case SAVE_STREET_DATA:
      return update(state, {
        street: {$set: action.data}
      })
    case LOAD_NEWS_FAILURE:
    case LOAD_GRAPHS_FAILURE:
      return update(state, {
        message: {$set: action.message},
      });
    default:
      return state;
  }
};
