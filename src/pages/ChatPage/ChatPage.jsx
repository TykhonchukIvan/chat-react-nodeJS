import React, { useEffect } from 'react';
import axios from 'axios';

import socket from "../../socketClient";

import ButtonSendMessages from "../../components/ButtonSendMessages";
import Textarea from "../../components/Textarea";
import UserOnline from '../../components/UserOnline';

import './ChatPage.less';

export const ChatPage = (props) =>{

    const { form, messages, getMessages, users, setUsers } = props;

    const data = {
        login: form.userName,
        roomId: form.roomId,
    }


    useEffect( () => {
        socket.emit('ROOM:JOIN', data);
        socket.on('ROOM:SET_USERS', (users)=> { setUsers(users) });

        axios.get(`/rooms/${data.roomId}`).then(({data})=>{
            setUsers(data.users)
            console.log(data.users)
        })

    }, []);

    const onChangeHandlerTextarea = (event) =>{
        const inputTextarea = event.target.value
        getMessages(inputTextarea)
    }

    return (
        <div className='chat'>
            <div className='chat__body'>
                <UserOnline users={users}/>
                <div></div>
            </div>
            <div className='chat__send'>
                <Textarea onChange={onChangeHandlerTextarea} value={messages} />
                <ButtonSendMessages/>
            </div>
        </div>
    )
};