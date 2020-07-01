import {combineReducers} from "redux";
import logInReducer, * as fromLogin from "./reducers/loginJs";

export const initState = {
    login: fromLogin.loginInitialState
}

export default combineReducers({
    login: logInReducer,
})

export const getLoginForm = state => fromLogin.getLogInForm(state.login)
export const getIsAuthentication = state => fromLogin.getIsAuthentication(state.login)