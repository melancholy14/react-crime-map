import { fork, put, takeLatest, select } from 'redux-saga/effects';
import { request } from './utils';

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
    const response = yield request('https://data.police.uk/api/crimes-street-dates');

    yield put(loadAvailabilitySuccess(response.data));
  } catch(err) { 
    console.log(err);
    yield put(loadAvailabilityFailure(err.message));
  }
}

function* loadCrimeCategory({ date }) {
  try {
    const response = yield request(`https://data.police.uk/api/crime-categories?date=${date}`);

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

    const response = yield request(`https://data.police.uk/api/crimes-street/${url}?lat=${lat}&lng=${lng}&date=${date}`);

    yield put(searchSuccess(response.data));
  } catch(err) { 
    console.log(err);
    yield put(searchFailure(err.message));
  }
}

export default function* sagas() {
  yield fork(loadAvailability);

  yield takeLatest(LOAD_CRIME_CATEGORY_REQUEST, loadCrimeCategory);
  yield takeLatest(SEARCH_REQUEST, search);
}