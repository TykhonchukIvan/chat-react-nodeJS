import { combineReducers } from "redux";
import { loginReducer, messagesReducer, InitialState,  } from "./reducers/reducer";

export const initState = {
    login: InitialState,
}

export default combineReducers({
    login: loginReducer,
    messages: messagesReducer,
})

export const getLoginForm = state => fromLogin.getLogInForm(state.login)
export const getIsAuthentication = state => fromLogin.getIsAuthentication(state.login)
export const getMessagesText = state => fromLogin.getIsAuthentication(state.login)