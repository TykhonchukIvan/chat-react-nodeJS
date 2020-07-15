import React, { Fragment } from 'react';

import  LogInPage  from "../pages/LogInPage";
import ChatPage from "../pages/ChatPage"

import './Chat.less';


export function ChatContainer (props) {

    const { isAuthentication } = props

    return (

        <Fragment>
            <ChatPage/>
            {/*{ !isAuthentication ? <LogInPage /> : <ChatPage/>}*/}

        </Fragment>

    )
}

