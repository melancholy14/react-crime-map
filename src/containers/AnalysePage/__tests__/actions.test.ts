import { createStore, combineReducers } from 'redux';
import analyseReducer from '../reducer';
import {
  loadGraphsRequest,
  loadGraphsSuccess,
  loadGraphsFailure,
  loadNewsFailure,
  loadNewsSuccess,
  saveStreetData,
  loadNeighbourhoodRequest,
  loadNeighbourhoodFailure,
  loadNeighbourhoodSuccess,
  toggleShow,
} from '../actions';

describe('actions in AnalysePage', () => {
  let store;
  beforeAll(() => {
    store = createStore(combineReducers({ analyse: analyseReducer }));
  });

  it('loadGraphsRequest', () => {
    const id = '0';
    store.dispatch(loadGraphsRequest(id));

    expect(store.getState().analyse.graph).toBeDefined();
    expect(store.getState().analyse.graph.date.length).toBe(0);
    expect(store.getState().analyse.graph.category.length).toBe(0);
    expect(store.getState().analyse.graph.outcome.length).toBe(0);
  });

  it('loadGraphsSuccess', () => {
    const response = {
      date: [{ date: '2018-01', count: 10 }],
      category: [{ category: 'drugs', count: 7 }],
      outcome: [{ outcome: 'under-investigation', count: 5 }],
    };

    store.dispatch(loadGraphsSuccess(response));

    expect(store.getState().analyse.graph).toBeDefined();
    expect(store.getState().analyse.graph.date.length).toBe(1);
    expect(store.getState().analyse.graph.category.length).toBe(1);
    expect(store.getState().analyse.graph.outcome.length).toBe(1);
  });

  it('loadGraphsFailure', () => {
    const message = 'loadGraphsFailure';
    store.dispatch(loadGraphsFailure(message));

    expect(store.getState().analyse.message).toEqual(message);
  });

  it('loadNewsRequest', () => {
    const latlng = {};
    store.dispatch(loadGraphsRequest(latlng));

    expect(store.getState().analyse.news).toBeDefined();
    expect(store.getState().analyse.news.length).toBe(0);
  });

  it('loadNewsSuccess', () => {
    const response = [{
      apiUrl: 'https://content.guardianapis.com/cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt',
      id: 'cities/ng-interactive/2018/jul/30/follow-new-silk-road-china-belt',
      pillarId: 'pillar/news',
      pillarName: 'News',
      sectionId: 'cities',
      sectionName: 'Cities',
      type: 'interactive',
      webPublicationDate: '2018-07-30T08:06:06Z',
      webTitle: 'Follow the New Silk Road',
    }];

    store.dispatch(loadNewsSuccess(response));

    expect(store.getState().analyse.news).toBeDefined();
    expect(store.getState().analyse.news.length).toBe(1);
  });

  it('loadNewsFailure', () => {
    const message = 'loadNewsFailure';
    store.dispatch(loadNewsFailure(message));

    expect(store.getState().analyse.message).toEqual(message);
  });

  it('loadNeighbourhoodRequest', () => {
    const latlng = {};
    store.dispatch(loadNeighbourhoodRequest(latlng));

    expect(store.getState().analyse.neighbourhood).toBeDefined();
    expect(store.getState().analyse.neighbourhood).toEqual({
      init: {},
      team: [],
      events: [],
      priorities: [],
    });
  });

  it('loadNeighbourhoodSuccess', () => {
    const data = {
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
    };

    store.dispatch(loadNeighbourhoodSuccess(data));

    expect(store.getState().analyse.neighbourhood).toBeDefined();
    expect(store.getState().analyse.neighbourhood).toEqual({
      init: {
        ...data,
      },
      events: [],
      team: [],
      priorities: [],
    });
  });

  it('loadNeighbourhoodFailure', () => {
    const message = 'loadNeighbourhoodFailure';
    store.dispatch(loadNeighbourhoodFailure(message));

    expect(store.getState().analyse.message).toEqual(message);
  });

  it('saveStreetData', () => {
    const data = {
      id: 1000,
      name: 'near Earlsfield Station',
    };

    store.dispatch(saveStreetData(data));

    expect(store.getState().analyse.street.id).toEqual(1000);
    expect(store.getState().analyse.street.name).toEqual('near Earlsfield Station');
  });

  it('toggleShow', () => {
    const show = true;

    store.dispatch(toggleShow(show));

    expect(store.getState().analyse.show).toEqual(true);
  });
});
