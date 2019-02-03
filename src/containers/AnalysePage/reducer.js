// @flow

import update from 'immutability-helper';

import {
  LOAD_GRAPHS_SUCCESS,
  LOAD_GRAPHS_FAILURE,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
  SAVE_STREET_DATA,
  LOAD_NEIGHBOURHOOD_SUCCESS,
  LOAD_NEIGHBOURHOOD_FAILURE,
  TOGGLE_SHOW,
} from './actions';

import type {
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
  neighbourhood: {
    init: {},
    team: [],
    events: [],
    priorities: [],
  },
  show: false,
  message: '',
};

export default function analyseReducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case LOAD_GRAPHS_SUCCESS:
      return update(state, {
        graph: { $set: action.data },
      });
    case LOAD_NEWS_SUCCESS:
      return update(state, {
        news: { $set: action.data },
      });
    case SAVE_STREET_DATA:
      return update(state, {
        street: { $set: action.data },
      });
    case LOAD_NEIGHBOURHOOD_SUCCESS:
      return update(state, {
        neighbourhood: { $set: action.data },
      });
    case TOGGLE_SHOW:
      return update(state, {
        show: { $set: action.data },
      });
    case LOAD_NEWS_FAILURE:
    case LOAD_GRAPHS_FAILURE:
    case LOAD_NEIGHBOURHOOD_FAILURE:
      return update(state, {
        message: { $set: action.message },
      });
    default:
      return state;
  }
}
