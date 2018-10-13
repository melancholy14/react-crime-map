import {
  SAVE_STREET_ID,
  EXTRACT_DATA_SUCCESS,
  EXTRACT_DATA_FAILURE,
} from './actions';

const initialState = {
  streetId: 0,
};

export default function analyseReducer(state = initialState, action){
  switch(action.type){
    case SAVE_STREET_ID:
      return {
        ...state,
        streetId: action.id,
      };
    case EXTRACT_DATA_SUCCESS:
      return {
        ...state,
        ...action.data,
      };
    case EXTRACT_DATA_FAILURE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return state;
  }
};