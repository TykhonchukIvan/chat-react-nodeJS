import {all, call, put, takeLatest} from 'redux-saga/effects';
import { loginActionTypes, usersActionTypes } from '../type/type';
import { loginActions, usersActions } from '../actions/actions';
import axios from "axios";

export function* sendFormSaga(action) {
  const data = action.payload
  try {
    const response = yield axios.post('/rooms', data)
    if(response.status === 200){
      yield put(loginActions.onLogin())
    }
  } catch (e) {
    console.error('sendFormSaga', e);
  }
}

export function* setUsersSaga (action) {
  const roomId = action.payload;
  try {
    const response = yield axios.get(`/rooms/${roomId}`)
    if(response.status === 200){
      const users =  response.data.users
      yield put(usersActions.setUsers(users))
    }
  } catch (e) {
    console.error('setUsersSaga', e);
  }
}

export const sagaREST = [
   takeLatest(loginActionTypes.SEND_FORM_SAGA, sendFormSaga),
   takeLatest(usersActionTypes.SET_USERS_SAGA, setUsersSaga)
]