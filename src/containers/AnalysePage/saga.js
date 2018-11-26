// @flow

import { takeLatest, select, put, call } from 'redux-saga/effects';
import { api, request, keys } from '../../utils/request';

import {
  LOAD_GRAPHS_REQUEST,
  loadGraphsSuccess,
  loadGraphsFailure,
  LOAD_NEWS_REQUEST,
  loadNewsFailure,
  loadNewsSuccess,
  saveStreetData,
  LOAD_NEIGHBOURHOOD_REQUEST,
  loadNeighbourhoodFailure,
  loadNeighbourhoodSuccess,
} from './actions';

function* loadGraph({ street }){
  try {
    const crimes = yield select((state) => state.search.crimes);
    const selectedCrimes = crimes && crimes.filter(({
      location: {
        street: {
          id,
        } = {},
      } = {},
    }) => id === street.id);

    const dates = yield select((state) => state.search.dates);

    const {
      date,
      category,
      outcome,
    } = selectedCrimes.reduce((acc, ele) => {
      const {
        month,
        category,
        outcome_status,
        outcomes: {
          category: outcome,
        } = outcome_status || {},
      } = ele;

      return ({
        date: {
          ...acc.date,
          [month]: acc.date[month] ? acc.date[month] + 1 : 1, 
        },
        category: {
          ...acc.category,
          [category]: acc.category[category] ? acc.category[category] + 1 : 1,
        },
        outcome: {
          ...acc.outcome,
          [outcome]: acc.outcome[outcome] ? acc.outcome[outcome] + 1 : 1,
        }
      });
    }, {
      date: {},
      category: {},
      outcome: {},
    });

    yield put(loadGraphsSuccess({
      date: dates.map((d) => ({
        date: d,
        count: date[d] || 0,
      })),
      category: Object.entries(category).map(([category, count]) => ({ category, count })),
      outcome: Object.entries(outcome).map(([outcome, count]) => ({ outcome, count })),
    }));

    yield put(saveStreetData(street));
  } catch(err) {
    console.error(err);
    yield put(loadGraphsFailure(err.message));
  }
}

function* loadNews({ latlng }) {
  try {
    const addressUrl = `${api.mapquest}/reverse?key=${keys.mapquest}&location=${latlng.join(',')}&includeRoadMetadata=true&includeNearestIntersection=true`;

    const {
      data: {
        results: address = [],
      } = {},
    } = yield call(request, addressUrl);

    const { locations = [] } = address[0];
    const { street, adminArea5, postalCode } = locations[0];

    const query = `${adminArea5} AND ${street ? street : postalCode}`;
    const dates = yield select((state) => state.search.dates);

    const newsUrl = `${api.guardian}?q=${query}&from-date=${dates[0]}-01&api-key=${keys.guardian}`;

    const {
      data: {
        response: {
          results = [],
        },
      } = {},
    } = yield call(request, newsUrl);

    results.sort((a, b) => b.webPublicationDate.localeCompare(a.webPublicationDate));

    yield put(loadNewsSuccess(results));
  } catch (err) {
    console.error(err);
    yield put(loadNewsFailure(err.message));
  }
}

function* loadNeighbourhood({ latlng }) {
  try {
    const url = `${api.police}/locate-neighbourhood?q=${latlng.join(',')}`;
    const {
      data: {
        force,
        neighbourhood,
      },
    } = yield call(request, url);

    const { data } = yield call(request, `${api.police}/${force}/${neighbourhood}`);
    console.log(data);

    yield put(loadNeighbourhoodSuccess(data));
  } catch (error) {
    console.error(error);
    yield put(loadNeighbourhoodFailure(error.message));
  }
}

export default function* saga(): Generator<any, void, any>{
  yield takeLatest(LOAD_GRAPHS_REQUEST, loadGraph);
  yield takeLatest(LOAD_NEWS_REQUEST, loadNews);
  yield takeLatest(LOAD_NEIGHBOURHOOD_REQUEST, loadNeighbourhood);
}