export const loginActionTypes = {
    SET_FORM: 'SET_FORM',
    IS_AUTHENTICATION: 'IS_AUTHENTICATION',
}

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