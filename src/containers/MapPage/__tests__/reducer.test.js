import deepFreeze from 'deep-freeze';

import {
  SAVE_LOCATION,
  FILTER_CRIME_CIRCLES,
  INITIAL_CRIME_CIRCLES,
} from '../actions';

import MapReducer from '../reducer';

describe('reducer in MapPage', () => {
  it('SAVE_LOCATION', () => {
    const state = {};
    const action = {
      type: SAVE_LOCATION,
      data: {
        lat: 11.1,
        lng: -0.01,
      },
    };

    deepFreeze(state);

    const result = MapReducer(state, action);
    expect(result).toEqual({
      latlng: {
        lat: 11.1,
        lng: -0.01,
      },
    });
  });

  it('INITIAL_CRIME_CIRCLES', () => {
    const state = {};
    const action = {
      type: INITIAL_CRIME_CIRCLES,
      data: [{
        id: 0,
        opacity: 0.5,
        radius: 0.5,
      }, {
        id: 1,
        opacity: 0.25,
        radius: 0.75,
      }],
    };

    deepFreeze(state);

    const result = MapReducer(state, action);
    expect(result).toEqual({
      crimes: [{
        id: 0,
        opacity: 0.5,
        radius: 0.5,
      }, {
        id: 1,
        opacity: 0.25,
        radius: 0.75,
      }],
      circles: [{
        id: 0,
        opacity: 0.5,
        radius: 0.5,
      }, {
        id: 1,
        opacity: 0.25,
        radius: 0.75,
      }],
    });
  });

  it('FILTER_CRIME_CIRCLES', () => {
    const state = {
      crimes: [{
        id: 0,
        category: 'drugs',
        opacity: 0.5,
        radius: 0.5,
      }, {
        id: 1,
        category: 'bicycle-theft',
        opacity: 0.25,
        radius: 0.75,
      }],
    };

    const action = {
      type: FILTER_CRIME_CIRCLES,
      data: ['bicycle-theft'],
    };

    deepFreeze(state);

    const result = MapReducer(state, action);
    expect(result).toEqual({
      crimes: [{
        id: 0,
        category: 'drugs',
        opacity: 0.5,
        radius: 0.5,
      }, {
        id: 1,
        category: 'bicycle-theft',
        opacity: 0.25,
        radius: 0.75,
      }],
      circles: [{
        id: 1,
        category: 'bicycle-theft',
        opacity: 0.25,
        radius: 0.75,
      }],
    });
  });
});
