import { takeLatest, select, put } from 'redux-saga/effects';

import {
  SAVE_STREET_ID,
  extractDataSuccess,
  extractDataFailure,
} from './actions';

function* extractData({ id: streetId }){
  try {
    const crimes = yield select((state) => state.search.crimes);
    const selectedCrimes = crimes && crimes.filter(({ location: { street: { id } = {}, } = {}, }) => id === streetId);

    console.log('selectedCrimes', selectedCrimes);

    const crimeTable = selectedCrimes.map(({
      id,
      month,
      category,
      location: {
        street: {
          name,
        } = {},
      } = {},
      outcome_status,
      outcomes: {
        category: outcome,
      } = outcome_status || {},
    }) => ({ id, list: [['month', month], ['category', category], ['street', name], ['outcome status', outcome]] }));

    yield put(extractDataSuccess({
      crimeTable,
    }));
  } catch(err) {
    yield put(extractDataFailure(err.message));
  }
}

export default function* saga(){
  yield takeLatest(SAVE_STREET_ID, extractData);
}