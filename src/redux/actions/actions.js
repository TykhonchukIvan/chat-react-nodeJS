import { loginActionTypes } from "../type/type";
import { messagesActionTypes } from '../type/type';

export const loginActions = {
    setForm: (name, value) => ({
        type: loginActionTypes.SET_FORM,
        payload: { name, value }
    }),
    onLogin:()=>({
        type: loginActionTypes.IS_AUTHENTICATION,
        payload: true
    })
}

export const messagesActions = {
    setMessages: (value) => ({
        type: messagesActionTypes.SET_MESSAGES,
        payload: value,
    })
}