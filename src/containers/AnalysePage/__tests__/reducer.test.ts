import deepFreeze from 'deep-freeze';

import {
  LOAD_GRAPHS_SUCCESS,
  LOAD_GRAPHS_FAILURE,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
  SAVE_STREET_DATA,
  LOAD_NEIGHBOURHOOD_SUCCESS,
  LOAD_NEIGHBOURHOOD_FAILURE,
  TOGGLE_SHOW,
} from '../actions';

import analyseReducer from '../reducer';

describe('reducer in AnalysePage', () => {
  it('LOAD_GRAPHS_SUCCESS', () => {
    const state = {};
    const action = {
      type: LOAD_GRAPHS_SUCCESS,
      data: {
        date: [{ date: '2018-01', count: 10 }],
        category: [{ category: 'drugs', count: 7 }],
        outcome: [{ outcome: 'under-investigation', count: 5 }],
      },
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      graph: {
        date: [{ date: '2018-01', count: 10 }],
        category: [{ category: 'drugs', count: 7 }],
        outcome: [{ outcome: 'under-investigation', count: 5 }],
      },
    });
  });

  it('LOAD_GRAPHS_FAILURE', () => {
    const state = {};
    const action = {
      type: LOAD_GRAPHS_FAILURE,
      message: 'LOAD_GRAPHS_FAILURE',
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      message: 'LOAD_GRAPHS_FAILURE',
    });
  });

  it('LOAD_NEWS_SUCCESS', () => {
    const state = {};
    const action = {
      type: LOAD_NEWS_SUCCESS,
      data: [{
        apiUrl: 'https://content.guardianapis.com/cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt',
        id: 'cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt',
        pillarId: 'pillar/news',
        pillarName: 'News',
        sectionId: 'cities',
        sectionName: 'Cities',
        type: 'interactive',
        webPublicationDate: '2018-07-30T08:06:06Z',
        webTitle: 'Follow the New Silk Road',
      }],
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      news: [{
        apiUrl: 'https://content.guardianapis.com/cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt',
        id: 'cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt',
        pillarId: 'pillar/news',
        pillarName: 'News',
        sectionId: 'cities',
        sectionName: 'Cities',
        type: 'interactive',
        webPublicationDate: '2018-07-30T08:06:06Z',
        webTitle: 'Follow the New Silk Road',
      }],
    });
  });

  it('LOAD_NEWS_FAILURE', () => {
    const state = {};
    const action = {
      type: LOAD_NEWS_FAILURE,
      message: 'LOAD_NEWS_FAILURE',
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      message: 'LOAD_NEWS_FAILURE',
    });
  });

  it('LOAD_NEIGHBOURHOOD_SUCCESS', () => {
    const state = {};
    const action = {
      type: LOAD_NEIGHBOURHOOD_SUCCESS,
      data: {
        url_force: 'http://www.met.police.uk/a/your-area/met/wandsworth/earlsfield/',
        contact_details: {
          website: 'http://www.met.police.uk/a/your-area/met/wandsworth/earlsfield/',
          twitter: 'MPSEarlsfield',
        },
        name: 'Earlsfield',
        links: [],
        centre: {
          latitude: '51.4422',
          longitude: '-0.183829',
        },
        locations: [],
        id: 'E05000612',
        population: '0',
      },
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      neighbourhood: {
        url_force: 'http://www.met.police.uk/a/your-area/met/wandsworth/earlsfield/',
        contact_details: {
          website: 'http://www.met.police.uk/a/your-area/met/wandsworth/earlsfield/',
          twitter: 'MPSEarlsfield',
        },
        name: 'Earlsfield',
        links: [],
        centre: {
          latitude: '51.4422',
          longitude: '-0.183829',
        },
        locations: [],
        id: 'E05000612',
        population: '0',
      },
    });
  });

  it('LOAD_NEIGHBOURHOOD_FAILURE', () => {
    const state = {};
    const action = {
      type: LOAD_NEIGHBOURHOOD_FAILURE,
      message: 'LOAD_NEIGHBOURHOOD_FAILURE',
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      message: 'LOAD_NEIGHBOURHOOD_FAILURE',
    });
  });

  it('SAVE_STREET_DATA', () => {
    const state = {};
    const action = {
      type: SAVE_STREET_DATA,
      data: {
        id: 10001,
        name: 'near Earlsfield',
      },
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      street: {
        id: 10001,
        name: 'near Earlsfield',
      },
    });
  });

  it('TOGGLE_SHOW', () => {
    const state = {};
    const action = {
      type: TOGGLE_SHOW,
      data: false,
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      show: false,
    });
  });
});
