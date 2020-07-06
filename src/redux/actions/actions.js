import { loginActionTypes } from "../type/type";

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