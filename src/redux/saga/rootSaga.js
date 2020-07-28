import { all, takeLatest } from 'redux-saga/effects';
import {sagaREST} from './sagaREST';

function* rootSaga() {
  yield all([
    ...sagaREST,
  ]);
}

export default rootSaga;