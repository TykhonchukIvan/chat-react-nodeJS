import React, {useState, useEffect, useCallback} from 'react';

import './LogIn.less'
import socket from '../socketClient'

import Input from "../components/Input/Input";
import Button from "../components/Button/Button";


export function Login (props) {

    // const [form, setForm] = useState({userName: '', roomId: '',})


    // useEffect(() => {
    //     console.log('efect')
    //     return () => {
    //         console.log('del')
    //     }
    // }, [form])

    // const Fn = useCallback(() => {
    //     return <Input value={form.userName}/>
    // }, [form.userName])


    // const onSend = () => {
    //
    //     if (!form.userName || !form.roomId) {
    //         console.log('Пустие значения!');
    //         return;
    //     }
    //
    //     console.log(form.userName, form.roomId);
    //
    //
    // }

    // const onChangeHandlerForm = (e) => {
    //
    //     const inputName = e.target.name
    //     const inputValue = e.target.value
    //
    //     setForm((form) => {
    //         return {
    //             ...form,
    //             [inputName]: inputValue,
    //         }
    //     })
    // }


    // console.log(form)



    const {
        form,
        setForm

    } = props

    console.log(form)

    const onChangeHandlerForm = (e) =>{
        const inputName = e.target.name
        const inputValue = e.target.value
        setForm(inputName,inputValue)
    }

    const onSend = () => {

        if (!form.userName || !form.roomId) {
            console.log('Пустие значения!');
            return;
        }

        console.log(form.userName, form.roomId);

    }


    return (
        <div className='login-form'>
            <Input placeholder={'Login'} value={form.userName} onChange={onChangeHandlerForm} name={'userName'}/>
            <Input placeholder={'Room'} value={form.roomId} onChange={onChangeHandlerForm} name={'roomId'}/>
            <Button text={'Log in'} onClick={onSend}/>
        </div>
    )

}

