// @flow

import update from 'immutability-helper';

import type {
  MapReducerState as State,
  Action,
} from '../../utils/types';

import {
  SAVE_LOCATION,
  INITIAL_CRIME_CIRCLES,
  FILTER_CRIME_CIRCLES,
} from './actions';

const initialState = {
  latlng: {
    lat: 51.505,
    lng: -0.09,
  },
  crimes: [],
  circles: [],
  message: '',
};

export default function mapReducer(state: State = initialState, action: Action) {
  switch (action.type) {
    case SAVE_LOCATION:
      return update(state, {
        latlng: { $set: action.data },
      });
    case INITIAL_CRIME_CIRCLES:
      return update(state, {
        crimes: { $set: action.data },
        circles: { $set: action.data },
      });
    case FILTER_CRIME_CIRCLES: {
      const circles = state.crimes.filter(
        ({ category }) => action.data && action.data.includes(category),
      );
      return update(state, {
        circles: { $set: circles },
      });
    }
    default:
      return state;
  }
}
