import { createStore, combineReducers } from 'redux';

import mapReducer from '../reducer';

import {
  saveLocation,
  filterCrimeCircles,
  initialCrimeCircles,
} from '../actions';

describe('actions in MapPage', () => {
  let store;
  beforeAll(() => {
    const reducer = combineReducers({ map: mapReducer });
    store = createStore(reducer);
  });

  it('saveLocation', () => {
    const latlng = {
      lat: 11.1,
      lng: -0.01,
    };

    store.dispatch(saveLocation(latlng));

    expect(store.getState().map.latlng).toEqual({
      lat: 11.1,
      lng: -0.01,
    });
  });

  it('initialCrimeCircles', () => {
    const crimes = [{
      category: 'anti-social-behaviour',
      location: {
        latitude: 11.1,
        longitude: -0.05,
        street: {
          id: 0,
        },
      },
    }, {
      category: 'burglary',
      location: {
        latitude: 12.1,
        longitude: -0.01,
        street: {
          id: 1,
        },
      },
    }, {
      category: 'burglary',
      location: {
        latitude: 6.11,
        longitude: -1.01,
        street: {
          id: 0,
        },
      },
    }];

    store.dispatch(initialCrimeCircles(crimes));

    expect(store.getState().map.circles.length).toBe(2);

    expect(store.getState().map.circles[0].fillColor).toBeDefined();
    expect(store.getState().map.circles[0].count).toBe(2);
    expect(store.getState().map.circles[0].opacity).toBeGreaterThanOrEqual(0.5);
    expect(store.getState().map.circles[0].opacity).toBeLessThanOrEqual(1);
    expect(store.getState().map.circles[0].radius).toBeGreaterThanOrEqual(25);
    expect(store.getState().map.circles[0].radius).toBeLessThanOrEqual(250);

    expect(store.getState().map.circles[1].fillColor).toBeDefined();
    expect(store.getState().map.circles[1].count).toBe(1);
    expect(store.getState().map.circles[1].opacity).toBeGreaterThanOrEqual(0.5);
    expect(store.getState().map.circles[1].opacity).toBeLessThanOrEqual(1);
    expect(store.getState().map.circles[1].radius).toBeGreaterThanOrEqual(25);
    expect(store.getState().map.circles[1].radius).toBeLessThanOrEqual(250);
  });

  it('filterCrimeCircles', () => {
    const categories = ['burglary'];

    store.dispatch(filterCrimeCircles(categories));

    expect(store.getState().map.circles.length).toBe(1);

    expect(store.getState().map.circles[0].count).toBe(1);
    expect(store.getState().map.circles[0].opacity).toBeGreaterThanOrEqual(0.5);
    expect(store.getState().map.circles[0].opacity).toBeLessThanOrEqual(1);
    expect(store.getState().map.circles[0].radius).toBeGreaterThanOrEqual(25);
    expect(store.getState().map.circles[0].radius).toBeLessThanOrEqual(250);
  });
});
