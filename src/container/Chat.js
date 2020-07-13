import React, { Fragment } from 'react';

import  LogInPage  from "../pages/LogInPage/index.js";
import ChatPage from "../pages/ChatPage/index.js"

import './Chat.less';


export function ChatContainer (props) {

    const { isAuthentication } = props

    return (

        <Fragment>
            {/*<ChatPage/>*/}
            {/*{ !isAuthentication ? <LogInPage /> : <ChatPage/>}*/}

        </Fragment>

    )
}

