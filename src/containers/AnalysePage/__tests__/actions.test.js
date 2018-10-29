import { createStore, combineReducers } from 'redux';
import analyseReducer from '../reducer';
import { loadGraphsRequest, loadGraphsSuccess, loadGraphsFailure, loadNewsFailure, loadNewsSuccess } from '../actions';

describe("actions in AnalysePage", () => {
  let store;
  beforeAll(() => {
    store = createStore(combineReducers({ analyse: analyseReducer }));
  });

  it("loadGraphsRequest", () => {
    const id = "0";
    store.dispatch(loadGraphsRequest(id));

    expect(store.getState().analyse.dateGraph.length).toBe(0);
    expect(store.getState().analyse.categoryGraph.length).toBe(0);
    expect(store.getState().analyse.outcomeGraph.length).toBe(0);
  });

  it("loadGraphsSuccess", () => {
    const response = {
      dateGraph: [{ date: '2018-01', count: 10 }],
      categoryGraph: [{ category: 'drugs', count: 7 }],
      outcomeGraph: [{ outcome: 'under-investigation', count: 5 }],
    };

    store.dispatch(loadGraphsSuccess(response));

    expect(store.getState().analyse.dateGraph.length).toBe(1);
    expect(store.getState().analyse.categoryGraph.length).toBe(1);
    expect(store.getState().analyse.outcomeGraph.length).toBe(1);
  });

  it("loadGraphsFailure", () => {
    const message = "loadGraphsFailure";
    store.dispatch(loadGraphsFailure(message));

    expect(store.getState().analyse.message).toEqual(message);
  });

  it("loadNewsRequest", () => {
    const latlng = {};
    store.dispatch(loadGraphsRequest(latlng));

    expect(store.getState().analyse.news.length).toBe(0);
  });

  it("loadNewsSuccess", () => {
    const response = [{
      apiUrl: "https://content.guardianapis.com/cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt",
      id: "cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt",
      pillarId: "pillar/news",
      pillarName: "News",
      sectionId: "cities",
      sectionName: "Cities",
      type: "interactive",
      webPublicationDate: "2018-07-30T08:06:06Z",
      webTitle: "Follow the New Silk Road"
    }];

    store.dispatch(loadNewsSuccess(response));

    expect(store.getState().analyse.news.length).toBe(1);
  });

  it("loadNewsFailure", () => {
    const message = "loadNewsFailure";
    store.dispatch(loadNewsFailure(message));

    expect(store.getState().analyse.message).toEqual(message);
  });
});