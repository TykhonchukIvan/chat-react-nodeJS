import React, { useEffect } from 'react';
import axios from 'axios';
import socket from "../../socketClient";
import PropTypes from 'prop-types';

import ButtonSendMessages from "../../components/ButtonSendMessages";
import Textarea from "../../components/Textarea";
import UserOnline from '../../components/UserOnline';
import MessagesContainer from './MessagesContainer';

import './ChatPage.less';

const ChatPage = ({ form, messages, getMessages, users, setUsers, setMassagesServer, clear }) =>{

    const data = {
        login: form.userName,
        roomId: form.roomId,
    }

    useEffect( () => {
        socket.emit('ROOM:JOIN', data);
        socket.on('ROOM:SET_USERS', (users)=> { setUsers(users) });
        axios.get(`/rooms/${data.roomId}`).then(({data})=>{
            setUsers(data.users)
        });
    }, []);

    const onChangeHandlerTextarea = (event) =>{
        const inputTextarea = event.target.value;
        getMessages(inputTextarea);
    }

    const dataMessage = {
        login: form.userName,
        roomId: form.roomId,
        text: messages,
    }

    const onSendMessage = () =>{
        socket.emit('ROOM:SET_NEW_MESSAGE', dataMessage);
        const { login, text } = dataMessage;
        setMassagesServer({login, text});
        clear();
    }

    return (
        <div className='chat'>
            <div className='chat__body'>
                <UserOnline users={users}/>
                <MessagesContainer />
            </div>
            <div className='chat__send'>
                <Textarea onChange={onChangeHandlerTextarea} value={messages} />
                <ButtonSendMessages onClick={onSendMessage}/>
            </div>
        </div>
    )
};

ChatPage.propTypes = {
    form: PropTypes.object,
    messages: PropTypes.string,
    getMessages: PropTypes.func.isRequired,
    users: PropTypes.object,
    setUsers: PropTypes.func.isRequired,
    setMassagesServer: PropTypes.func.isRequired,
    clear: PropTypes.func.isRequired,
};

export default ChatPage;