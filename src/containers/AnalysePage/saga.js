// @flow

import { takeLatest, select, put } from 'redux-saga/effects';
import { api, request, keys } from '../../utils/request';

import {
  LOAD_GRAPHS_REQUEST,
  loadGraphsSuccess,
  loadGraphsFailure,
  LOAD_NEWS_REQUEST,
  loadNewsFailure,
  loadNewsSuccess,
} from './actions';

function* loadGraph({ id: streetId }){
  try {
    const crimes = yield select((state) => state.search.crimes);
    const selectedCrimes = crimes && crimes.filter(({ location: { street: { id } = {}, } = {}, }) => id === streetId);

    const date = Object.entries(selectedCrimes.reduce((acc, ele) => ({
      ...acc,
      [ele.month]: acc[ele.month] >= 0 ? acc[ele.month] + 1 : 0,
    }), {})).map(([date, count]) => ({ date, count }));

    const category = Object.entries(selectedCrimes.reduce((acc, ele) => ({
      ...acc,
      [ele.category]: acc[ele.category] >= 0 ? acc[ele.category] + 1 : 0,
    }), {})).map(([category, count]) => ({ category, count }));

    const outcome = Object.entries(selectedCrimes.reduce((acc, ele) => {
      const {
        outcome_status,
        outcomes: {
          category: outcome,
        } = outcome_status || {},
      } = ele;

      if (outcome) {
        return {
          ...acc,
          [outcome]: acc[outcome] >= 0 ? acc[outcome] + 1 : 0,
        };
      }
      return acc;
    }, {})).map(([outcome, count]) => ({ outcome, count }));

    yield put(loadGraphsSuccess({
      date,
      category,
      outcome,
    }));
  } catch(err) {
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
    } = yield request(addressUrl);

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
    } = yield request(newsUrl);

    results.sort((a, b) => a.webPublicationDate.localeCompare(b.webPublicationDate));

    yield put(loadNewsSuccess(results));
  } catch (err) {
    console.error(err);
    yield put(loadNewsFailure(err.message));
  }
}

export default function* saga(): Generator<any, void, any>{
  yield takeLatest(LOAD_GRAPHS_REQUEST, loadGraph);
  yield takeLatest(LOAD_NEWS_REQUEST, loadNews);
}