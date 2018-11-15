// @flow

import update from 'immutability-helper';

import {
  MapReducerState as State,
  Action,
} from '../../utils/types';

import {
  SAVE_LOCATION,
  FILTER_CRIME_CIRCLES,
} from './actions';

const initialState = {
  latlng: {
    lat: 51.505,
    lng: -0.09,
  },
  circles: [],
};

export default function mapReducer(state: State = initialState, action: Action){
  switch(action.type) {
    case SAVE_LOCATION:
      return update(state, {
        latlng: {$set: action.data},
      });
    case FILTER_CRIME_CIRCLES:
      return update(state, {
        circles: {$set: action.data},
      });
    default:
      return state;
  }
}
