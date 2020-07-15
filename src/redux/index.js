import { combineReducers } from "redux";
import {loginReducer, messagesReducer, InitialState, getReducer, getMessages} from "./reducers/reducer";

export const initState = {
    login: InitialState,
}

export default combineReducers({
    login: loginReducer,
    messages: messagesReducer,
})

export const getLoginForm = state => getReducer.getLogInForm(state.login)
export const getIsAuthentication = state => getReducer.getIsAuthentication(state.login)
export const getMessagesText = state => getReducer.getMessages(state.messages)