import {loginActionTypes} from "../actions/loginJs";

export const loginInitialState = {
    form: { userName: '', roomId: '', },
    isAuthentication: false,

}

export default function (state = loginInitialState, action) {
    switch (action.type) {

        case loginActionTypes.SET_FORM: {
            const { name, value } = action.payload
            return {
                ...state,
               form: {
                    ...state.form,
                   [name]:value
               }
            }
        }
        case loginActionTypes.IS_AUTHENTICATION:{
            return {
                ...state,
                isAuthentication: action.payload
            }
        }

        default: return state
    }
}

export const getLogInForm = state => state.form;
export const getIsAuthentication = state => state.isAuthentication;