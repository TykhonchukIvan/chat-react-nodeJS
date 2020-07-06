import React from 'react';

import  LogInPage  from "../pages/LogInPage/index.js";
import ChatPage from "../pages/ChatPage/index.js"

import './Chat.less';


export function Chat (props) {

    const { isAuthentication } = props



    return (

        <div className='wrapper'>

            { !isAuthentication ? <LogInPage /> : <ChatPage/>}

        </div>

    )
}

