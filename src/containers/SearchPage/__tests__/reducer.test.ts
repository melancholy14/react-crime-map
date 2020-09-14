import deepFreeze from 'deep-freeze';

import {
  LOAD_AVAILABILITY_SUCCESS,
  LOAD_AVAILABILITY_FAILURE,
  LOAD_CRIME_CATEGORY_SUCCESS,
  LOAD_CRIME_CATEGORY_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
} from '../actions';

import SearchReducer from '../reducer';

describe('reducer in SearchPage', () => {
  it('LOAD_AVAILABILITY_SUCCESS', () => {
    const state = {
      availability: [],
    };
    const action = {
      type: LOAD_AVAILABILITY_SUCCESS,
      data: {
        availability: [
          { date: '2018-08', 'stop-and-search': [] },
          { date: '2018-07', 'stop-and-search': ['london', 'southampton'] },
        ],
        date: {
          min: '2018-07',
          max: '2018-08',
          dates: ['2018-07', '2018-08'],
        },
      },
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      availability: [
        { date: '2018-08', 'stop-and-search': [] },
        { date: '2018-07', 'stop-and-search': ['london', 'southampton'] },
      ],
      date: {
        min: '2018-07',
        max: '2018-08',
        dates: ['2018-07', '2018-08'],
      },
    });
  });

  it('LOAD_AVAILABILITY_FAILURE', () => {
    const state = {
      message: null,
    };
    const action = {
      type: LOAD_AVAILABILITY_FAILURE,
      message: 'LOAD_AVAILABILITY_FAILURE',
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      message: 'LOAD_AVAILABILITY_FAILURE',
    });
  });

  it('LOAD_CRIME_CATEGORY_SUCCESS', () => {
    const state = {
      category: [],
    };
    const action = {
      type: LOAD_CRIME_CATEGORY_SUCCESS,
      data: [
        { url: 'all-crime', name: 'All crime' },
        { url: 'anti-social-behaviour', name: 'Anti-social behaviour' },
        { url: 'bicycle-theft', name: 'Bicycle theft' },
      ],
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      category: [
        { url: 'all-crime', name: 'All crime' },
        { url: 'anti-social-behaviour', name: 'Anti-social behaviour' },
        { url: 'bicycle-theft', name: 'Bicycle theft' },
      ],
    });
  });

  it('LOAD_CRIME_CATEGORY_FAILURE', () => {
    const state = {
      message: null,
    };
    const action = {
      type: LOAD_CRIME_CATEGORY_FAILURE,
      message: 'LOAD_CRIME_CATEGORY_FAILURE',
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      message: 'LOAD_CRIME_CATEGORY_FAILURE',
    });
  });

  it('SEARCH_REQUEST', () => {
    const state = {};
    const action = {
      type: SEARCH_REQUEST,
      data: {
        url: 'all-crime',
        dates: [],
      },
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      url: 'all-crime',
      dates: [],
      loading: true,
    });
  });

  it('SEARCH_SUCCESS', () => {
    const state = {
      crimes: [],
      loading: true,
    };
    const action = {
      type: SEARCH_SUCCESS,
      data: [{
        category: 'anti-social-behaviour',
        context: '',
        id: 67271618,
      }, {
        category: 'violent-crime',
        context: '',
        id: 67350745,
      }],
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      crimes: [{
        category: 'anti-social-behaviour',
        context: '',
        id: 67271618,
      }, {
        category: 'violent-crime',
        context: '',
        id: 67350745,
      }],
      loading: false,
    });
  });

  it('SEARCH_FAILURE', () => {
    const state = {
      message: null,
      loading: true,
    };
    const action = {
      type: SEARCH_FAILURE,
      message: 'Error message',
    };

    deepFreeze(state);

    const result = SearchReducer(state, action);
    expect(result).toEqual({
      message: 'Error message',
      loading: false,
    });
  });
});
