import {loginActionTypes, messagesActionTypes, usersActionTypes} from "../type/type";


export const loginActions = {
  setForm: (name, value) => ({
    type: loginActionTypes.SET_FORM,
    payload: {name, value},
  }),
  onLogin: () => ({
    type: loginActionTypes.IS_AUTHENTICATION,
    payload: true,
  }),
  sendFormSaga: (data) => ({
    type: loginActionTypes.SEND_FORM_SAGA,
    payload: data,
  })
}

export const messagesActions = {
  clearTextarea: () => ({
    type: messagesActionTypes.CLEAR_TEXTAREA,
    payload: '',
  }),
  setMessages: (value) => ({
    type: messagesActionTypes.SET_MESSAGES,
    payload: value,
  }),
  setMassagesServer: (value) => ({
    type: messagesActionTypes.SET_MESSAGES_SERVER,
    payload: value,
  }),
}

export const usersActions = {
  setUsers: (value) => ({
    type: usersActionTypes.SET_USERS,
    payload: value,
  }),
  setUsersServer: (value) => ({
    type: usersActionTypes.SET_USERS_SAGA,
    payload: value,
  }),
}