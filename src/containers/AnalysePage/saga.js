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
      outcome_status,
      outcomes: {
        category: outcome,
      } = outcome_status || {},
    }) => ({ id, list: [['month', month], ['category', category], ['outcome', outcome]] }));

    const dateGraph = Object.entries(selectedCrimes.reduce((acc, ele) => ({
      ...acc,
      [ele.month]: acc[ele.month] >= 0 ? acc[ele.month] + 1 : 0,
    }), {})).map(([date, count]) => ({ date, count }));

    const categoryGraph = Object.entries(selectedCrimes.reduce((acc, ele) => ({
      ...acc,
      [ele.category]: acc[ele.category] >= 0 ? acc[ele.category] + 1 : 0,
    }), {})).map(([category, count]) => ({ category, count }));

    const outcomeGraph = Object.entries(selectedCrimes.reduce((acc, ele) => {
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

    yield put(extractDataSuccess({
      crimeTable,
      dateGraph,
      categoryGraph,
      outcomeGraph,
    }));
  } catch(err) {
    yield put(extractDataFailure(err.message));
  }
}

export default function* saga(){
  yield takeLatest(SAVE_STREET_ID, extractData);
}