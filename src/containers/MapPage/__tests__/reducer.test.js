import {
  SAVE_LOCATION,
  FILTER_CRIME_CIRCLES,
} from '../actions';
import MapReducer from '../reducer';

import deepFreeze from 'deep-freeze';

describe("reducer in MapPage", () => {
  it("SAVE_LOCATION", () => {
    const state = {};
    const action = {
      type: SAVE_LOCATION,
      data: {
        lat: 11.1,
        lng: -0.01,
      }
    };

    deepFreeze(state);

    const result = MapReducer(state, action);
    expect(result).toEqual({
      latlng: {
        lat: 11.1,
        lng: -0.01,
      }
    });
  });

  it("FILTER_CRIME_CIRCLES", () => {
    const state = {};
    const action = {
      type: FILTER_CRIME_CIRCLES,
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
      circles: [{
        id: 0,
        opacity: 0.5,
        radius: 0.5,
      }, {
        id: 1,
        opacity: 0.25,
        radius: 0.75,
      }]
    });
  });
});