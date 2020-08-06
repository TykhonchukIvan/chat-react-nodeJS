import { takeLatest } from 'redux-saga/effects';
import { usersActionTypes } from '../type/type';
import socket from "../../socketClient";

function* emitUsersSaga(action) {
  const data = action.payload;
  yield socket.emit('ROOM:JOIN', data);
}

function* emitMessagesSaga(action) {

}

export const wsSaga = [
  takeLatest(usersActionTypes.SET_USERS_WS_SAGA,emitUsersSaga),
  takeLatest('',emitMessagesSaga),
]