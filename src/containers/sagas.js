import { all, fork } from 'redux-saga/effects';

import searchSaga from './SearchPage/saga';
import analyseSaga from './AnalysePage/saga';

export default function* sagas () {
  yield all([
    searchSaga,
    analyseSaga
  ].map(fork));
}