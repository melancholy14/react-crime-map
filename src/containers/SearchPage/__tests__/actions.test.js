import { createStore, combineReducers } from 'redux';

import {
  loadAvailabilitySuccess,
  loadAvailabilityFailure,
  loadCrimeCategorySuccess,
  loadCrimeCategoryFailure,
  searchRequest,
  searchSuccess,
  searchFailure,
} from '../actions';

import SearchReducer from '../reducer';

describe('actions in SearchPage', () => {
  let store;

  beforeAll(() => {
    const reducer = combineReducers({ search: SearchReducer });
    store = createStore(reducer);
  });

  it('loadAvailabilitySuccess', () => {
    const response = [
      { date: '2018-08', 'stop-and-search': [] },
      { date: '2018-07', 'stop-and-search': ['london', 'southampton'] },
    ];

    store.dispatch(loadAvailabilitySuccess(response));

    expect(store.getState().search.availability.length).toBe(2);
    expect(store.getState().search.date.min).toEqual('2018-07');
    expect(store.getState().search.date.max).toEqual('2018-08');
    expect(store.getState().search.date.dates.length).toBe(2);
  });

  it('loadAvailabilityFailure', () => {
    const message = 'loadAvailabilityFailure';
    store.dispatch(loadAvailabilityFailure(message));

    expect(store.getState().search.message).toEqual(message);
  });

  it('loadCrimeCategorySuccess', () => {
    const response = [
      { url: 'all-crime', name: 'All crime' },
      { url: 'anti-social-behaviour', name: 'Anti-social behaviour' },
      { url: 'bicycle-theft', name: 'Bicycle theft' },
    ];

    store.dispatch(loadCrimeCategorySuccess(response));

    expect(store.getState().search.category.length).toBe(3);
  });

  it('loadCrimeCategoryFailure', () => {
    const message = 'loadCrimeCategoryFailure';
    store.dispatch(loadCrimeCategoryFailure(message));

    expect(store.getState().search.message).toEqual(message);
  });

  it('searchRequest', () => {
    const param = {
      url: 'all-crime',
      minDate: null,
      maxDate: null,
      postcode: null,
      dates: ['2017-08', '2017-09'],
    };
    store.dispatch(searchRequest(param));

    expect(store.getState().search.loading).toBeTruthy();
  });

  it('searchSuccess', () => {
    const response = [{
      category: 'anti-social-behaviour',
      context: '',
      id: 67271618,
    }, {
      category: 'violent-crime',
      context: '',
      id: 67350745,
    }];

    store.dispatch(searchSuccess(response));

    expect(store.getState().search.crimes.length).toBe(2);
    expect(store.getState().search.loading).toBeFalsy();
  });

  it('searchFailure', () => {
    const message = 'searchFailure';
    store.dispatch(searchFailure(message));

    expect(store.getState().search.message).toEqual(message);
    expect(store.getState().search.loading).toBeFalsy();
  });
});
