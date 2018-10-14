import {
  LOAD_GRAPHS_SUCCESS,
  LOAD_GRAPHS_FAILURE,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
} from './actions';

const initialState = {
};

export default function analyseReducer(state = initialState, action){
  switch(action.type){
    case LOAD_GRAPHS_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    case LOAD_NEWS_SUCCESS:
      return {
        ...state,
        news: action.news,
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