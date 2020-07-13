import React from 'react';
import axios from "axios";

import Input from "../../components/Input/Input";
import Button from "../../components/ButtonLogIn/Button";

import './LogInPage.less'

export const LoginForm = (props) => {

    const { form, setForm, onLogin } = props

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

        axios.post('/rooms',data).then(onLogin)

    }

    return(
        <div className='login-form'>
            <Input placeholder={'Login'} value={form.userName} onChange={onChangeHandlerForm} name={'userName'}/>
            <Input placeholder={'Room'} value={form.roomId} onChange={onChangeHandlerForm} name={'roomId'}/>
            <Button text={'Log in'} onClick={onSend}/>
        </div>
    )
}