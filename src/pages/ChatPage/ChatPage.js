import React, { useEffect } from 'react';

import socket from "../../socketClient";

import ButtonSendMessages from "../../components/ButtonSendMessages/ButtonSendMessages";
import Textarea from "../../components/Textarea/Textarea";

import './ChatPage.less';

export const ChatPage = (props) =>{

    const { form, messages, getMessages } = props;

    const data = {
        login: form.userName,
        roomId: form.roomId,
    }

    useEffect(() => {

        socket.emit('ROOM:JOIN', data);

        socket.on('ROOM:JOINED', (users)=>{
            console.log('new users', users)
        });
    }, [])


    const onChangeHandlerTextarea = (event) =>{
        const inputTextarea = event.target.value
        getMessages(inputTextarea)
    }


    return(

        <div className='chat'>
            <div className='chat__body'>
                <div></div>
                <div></div>
            </div>
            <div className='chat__send'>
                <Textarea onChange={onChangeHandlerTextarea}/>
                <ButtonSendMessages/>
            </div>
        </div>
    )
}