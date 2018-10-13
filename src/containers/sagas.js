import { fork, put, takeLatest, select } from 'redux-saga/effects';
import { api, request } from '../utils';

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

function* search({ params }) {
  try {
    const {
      url,
      date,
    } = params;

    const { lat, lng } = yield select((state) => state.map.latlng);

    if (lat && lng) {
      const response = yield request(`${api.police}/crimes-street/${url}?lat=${lat}&lng=${lng}&date=${date}`);

      yield put(searchSuccess(response.data));
    } else {
      yield put(searchFailure('There is no position info! Please, click the map and tell me where you want to know'));
    }
  } catch(err) { 
    console.log(err);
    yield put(searchFailure(err.message));
  }
}

export default function* sagas() {
  yield fork(loadAvailability);
  yield fork(loadCrimeCategory);

  yield takeLatest(LOAD_CRIME_CATEGORY_REQUEST, loadCrimeCategory);
  yield takeLatest(SEARCH_REQUEST, search);
}