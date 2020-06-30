export const loginActionTypes = {
    SET_FORM: 'SET_FORM'
}

export const loginActions = {
    setForm: (name, value) => ({
        type: loginActionTypes.SET_FORM,
        payload: { name, value }
    })
}