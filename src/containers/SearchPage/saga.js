// @flow

import { fork, put, takeLatest, select, all, call } from 'redux-saga/effects';
import { api, keys, request } from '../../utils/request';

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
  saveLocation,
  initialCrimeCircles,
} from '../MapPage/actions';

function* loadAvailability() {
  try {
    const response = yield call(request, `${api.police}/crimes-street-dates`);

    yield put(loadAvailabilitySuccess(response.data));
  } catch(err) { 
    console.log(err);
    yield put(loadAvailabilityFailure(err.message));
  }
}

function* loadCrimeCategory({ date: _date } = {}) {
  try {
    const date = _date || (new Date()).toLocaleDateString();

    const response = yield call(request, `${api.police}/crime-categories?date=${date}`);

    yield put(loadCrimeCategorySuccess(response.data));
  } catch(err) { 
    console.log(err);
    yield put(loadCrimeCategoryFailure(err.message));
  }
}

function* search({
  data: {
    urls,
    dates,
    postcode,
  }} = {}) {
  try {
    const { lat: _lat, lng: _lng } = yield select((state) => state.map.latlng);

    let lat = _lat;
    let lng = _lng;
    if (postcode) {
      const obj = {
        options :{},
        location: {
          street: '',
          city: '',
          state: '',
          postalCode: postcode,
          adminArea1: 'GB',
        }
      };

      const {
        data: {
          results,
        } = {},
      } = yield call(request, `${api.mapquest}/address?key=${keys.mapquest}&json=${JSON.stringify(obj)}`);

      if (results && results.length > 0) {
        const {
          locations,
        } = results[0];

        lat = locations[0].latLng.lat;
        lng = locations[0].latLng.lng;
      }
    }

    if (lat && lng && dates && dates.length > 0) {
      // const params = dates.flatMap((date) => {
      //   return urls.map((url) => [date, url])
      // }, []);

      // const responses = yield all(params.map(([date, url]) =>
      //     request(`${api.police}/crimes-street/${url}?lat=${lat}&lng=${lng}&date=${date}`)
      //   )
      // );

      const responses = yield all(dates.map((date) =>
          call(request, `${api.police}/crimes-street/all-crime?lat=${lat}&lng=${lng}&date=${date}`)
        )
      );

      const data = responses && responses.reduce((acc, response) => {
        return [...acc, ...(response && response.data)];
      }, []);

      yield put(saveLocation({ lat, lng }));
      yield put(searchSuccess(data));
      yield put(initialCrimeCircles(data))
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