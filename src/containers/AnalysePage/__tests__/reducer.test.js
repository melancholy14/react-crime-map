import {
  LOAD_GRAPHS_SUCCESS,
  LOAD_GRAPHS_FAILURE,
  LOAD_NEWS_SUCCESS,
  LOAD_NEWS_FAILURE,
} from '../actions';

import analyseReducer from '../reducer';

import deepFreeze from 'deep-freeze';

describe("reducer in AnalysePage", () => {
  it ("LOAD_GRAPHS_SUCCESS", () => {
    const state = {};
    const action = {
      type: LOAD_GRAPHS_SUCCESS,
      data: {
        dateGraph: [{ date: '2018-01', count: 10 }],
        categoryGraph: [{ category: 'drugs', count: 7 }],
        outcomeGraph: [{ outcome: 'under-investigation', count: 5 }],
      },
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      dateGraph: [{ date: '2018-01', count: 10 }],
      categoryGraph: [{ category: 'drugs', count: 7 }],
      outcomeGraph: [{ outcome: 'under-investigation', count: 5 }],
    });
  });

  it ("LOAD_GRAPHS_FAILURE", () => {
    const state = {};
    const action = {
      type: LOAD_GRAPHS_FAILURE,
      message: "LOAD_GRAPHS_FAILURE",
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      message: "LOAD_GRAPHS_FAILURE"
    });
  });

  it ("LOAD_NEWS_SUCCESS", () => {
    const state = {};
    const action = {
      type: LOAD_NEWS_SUCCESS,
      data: [{
        apiUrl: "https://content.guardianapis.com/cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt",
        id: "cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt",
        pillarId: "pillar/news",
        pillarName: "News",
        sectionId: "cities",
        sectionName: "Cities",
        type: "interactive",
        webPublicationDate: "2018-07-30T08:06:06Z",
        webTitle: "Follow the New Silk Road"
      }],
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      news: [{
        apiUrl: "https://content.guardianapis.com/cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt",
        id: "cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt",
        pillarId: "pillar/news",
        pillarName: "News",
        sectionId: "cities",
        sectionName: "Cities",
        type: "interactive",
        webPublicationDate: "2018-07-30T08:06:06Z",
        webTitle: "Follow the New Silk Road"
      }]
    });
  });

  it ("LOAD_NEWS_FAILURE", () => {
    const state = {};
    const action = {
      type: LOAD_NEWS_FAILURE,
      message: "LOAD_NEWS_FAILURE",
    };

    deepFreeze(state);

    const result = analyseReducer(state, action);
    expect(result).toEqual({
      message: "LOAD_NEWS_FAILURE"
    });
  });
});