import {loginActionTypes} from "../actions/loginJs";

export const loginInitialState = {
    form: {
        userName: '', roomId: '',
    }
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
        default: return state
    }
}

export const getLogInForm = state => state.form;