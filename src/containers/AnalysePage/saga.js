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
  saveStreetData,
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

    // const existedDate = Object.entries(selectedCrimes.reduce((acc, ele) => ({
    //   ...acc,
    //   [ele.month]: acc[ele.month] ? acc[ele.month] + 1 : 1,
    // }), {})).map(([date, count]) => ({ date, count }));

    const crimesByDate = selectedCrimes.reduce((acc, ele) => ({
      ...acc,
      [ele.month]: acc[ele.month] ? acc[ele.month] + 1 : 1, 
    }), {});

    console.log(crimesByDate);

    const dates = yield select((state) => state.search.dates);

    const date = dates.map((d) => ({
      date: d,
      count: crimesByDate[d] || 0,
    }));

    console.log(date);

    const category = Object.entries(selectedCrimes.reduce((acc, ele) => ({
      ...acc,
      [ele.category]: acc[ele.category] ? acc[ele.category] + 1 : 1,
    }), {})).map(([category, count]) => ({ category, count }));

    console.log(category);

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
          [outcome]: acc[outcome] ? acc[outcome] + 1 : 1,
        };
      }
      return acc;
    }, {})).map(([outcome, count]) => ({ outcome, count }));

    console.log(outcome);

    yield put(loadGraphsSuccess({
      date,
      category,
      outcome,
    }));

    yield put(saveStreetData(street));
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

    results.sort((a, b) => b.webPublicationDate.localeCompare(a.webPublicationDate));

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