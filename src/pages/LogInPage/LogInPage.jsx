import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Input from "../../components/Input";
import Button from "../../components/ButtonLogIn";

import './LogInPage.less'

const LoginForm = ({ form, setForm, sendFormSaga }) => {

    const [error, serError] = useState(false)

    const onChangeHandlerForm = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setForm(inputName,inputValue)
    }

    const onSend =  () => {
        if (form.userName.length < 5 || form.roomId.length < 5) {
            serError(true)
            return;
        } else {
            const data = {
                login: form.userName,
                roomId: form.roomId,
            }
            sendFormSaga(data)
        }
    }

    return(
        <div className='login-form'>
            <Input placeholder={'Login'}
                   value={form.userName}
                   onChange={onChangeHandlerForm}
                   name={'userName'}
                   style = { error ? {border: '1px solid red'} : {}}
            />
            <Input placeholder={'Room'}
                   value={form.roomId}
                   onChange={onChangeHandlerForm}
                   name={'roomId'}
                   style = { error ? {border: '1px solid red'} : {}}
            />
            <Button text={'Log in'} onClick={onSend}/>
        </div>
    )
};

LoginForm.propTypes = {
    form: PropTypes.object,
    setForm: PropTypes.func.isRequired,
    sendFormSaga: PropTypes.func.isRequired,
};

export default LoginForm;