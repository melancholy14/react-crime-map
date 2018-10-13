import { fork } from 'redux-saga/effects';

import searchSaga from './SearchPage/saga';

export default function* sagas () {
  yield [
    fork(searchSaga),
  ];
}