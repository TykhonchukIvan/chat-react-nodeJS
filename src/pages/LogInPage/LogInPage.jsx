import React from 'react';
import PropTypes from 'prop-types';

import Input from "../../components/Input";
import Button from "../../components/ButtonLogIn";

import './LogInPage.less'

const LoginForm = ({ form, setForm, sendFormSaga }) => {

    const onChangeHandlerForm = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setForm(inputName,inputValue)
    }

    const onSend =  () => {
        if (!form.userName || !form.roomId) {
            return;
        }
        const data = {
            login: form.userName,
            roomId: form.roomId,
        }
        sendFormSaga(data)
    }

    return(
        <div className='login-form'>
            <Input placeholder={'Login'} value={form.userName} onChange={onChangeHandlerForm} name={'userName'}/>
            <Input placeholder={'Room'} value={form.roomId} onChange={onChangeHandlerForm} name={'roomId'}/>
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