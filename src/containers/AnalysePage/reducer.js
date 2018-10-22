// @flow

import {
  LOAD_GRAPHS_SUCCESS,
  LOAD_GRAPHS_FAILURE,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
} from './actions';

type State = {
  +dateGraph: Array<any>,
  +categoryGraph: Array<any>,
  +outcomeGraph: Array<any>,
  +crimeTable: Array<any>,
  +news: Array<any>,
  +message: string,
}

const initialState = {
  dateGraph: [],
  categoryGraph: [],
  outcomeGraph: [],
  crimeTable: [],
  news: [],
  message: '',
}

type Action = {
  type: string,
  data?: any,
  message?: string,
}

export default function analyseReducer(state: State = initialState, action: Action): State{
  switch(action.type){
    case LOAD_GRAPHS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        news: action.data,
      }
    case LOAD_NEWS_FAILURE:
    case LOAD_GRAPHS_FAILURE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};
