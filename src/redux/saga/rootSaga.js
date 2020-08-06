import { all } from 'redux-saga/effects';
import { sagaREST }  from './sagaREST';
import { wsSaga }  from './sagaWS';

function* rootSaga() {
  yield all([
    ...sagaREST,
    ...wsSaga,
  ]);
}

export default rootSaga;