// @flow

import { fork, put, takeLatest, select, all } from 'redux-saga/effects';
import { api, request } from '../../utils/request';

import {
  LOAD_CRIME_CATEGORY_REQUEST,
  SEARCH_REQUEST,
  loadAvailabilitySuccess,
  loadAvailabilityFailure,
  loadCrimeCategorySuccess,
  loadCrimeCategoryFailure,
  searchSuccess,
  searchFailure,
} from './actions';

import {
  filterCrimeCircles,
} from '../MapPage/actions';

function* loadAvailability() {
  try {
    const response = yield request(`${api.police}/crimes-street-dates`);

    yield put(loadAvailabilitySuccess(response.data));
  } catch(err) { 
    console.log(err);
    yield put(loadAvailabilityFailure(err.message));
  }
}

function* loadCrimeCategory({ date: _date } = {}) {
  try {
    const date = _date || (new Date()).toLocaleDateString();

    const response = yield request(`${api.police}/crime-categories?date=${date}`);

    yield put(loadCrimeCategorySuccess(response.data));
  } catch(err) { 
    console.log(err);
    yield put(loadCrimeCategoryFailure(err.message));
  }
}

function* search({ data: { url, dates }} = {}) {
  try {
    const { lat, lng } = yield select((state) => state.map.latlng);

    if (lat && lng && dates && dates.length > 0) {
      const responses = yield all(dates.map((date) => request(`${api.police}/crimes-street/${url}?lat=${lat}&lng=${lng}&date=${date}`)));

      const data = responses && responses.reduce((acc, response) => {
        return [...acc, ...(response && response.data)];
      }, []);

      yield put(searchSuccess(data));
      yield put(filterCrimeCircles(data))
    } else {
      yield put(searchFailure('There is no position info! Please, click the map and tell me where you want to know'));
    }
  } catch(err) { 
    console.log(err);
    yield put(searchFailure(err.message));
  }
}

export default function* saga(): Generator<any, void, any> {
  yield fork(loadAvailability);
  yield fork(loadCrimeCategory);

  yield takeLatest(LOAD_CRIME_CATEGORY_REQUEST, loadCrimeCategory);
  yield takeLatest(SEARCH_REQUEST, search);
}