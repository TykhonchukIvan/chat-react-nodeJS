import { all, takeLatest } from 'redux-saga/effects';

function* rootSaga() {
  yield all([
    takeLatest('SOCIAL_LOGIN_SAGA', function* () {
      yield console.log('hello')
    }),
  ]);
}

export default rootSaga;