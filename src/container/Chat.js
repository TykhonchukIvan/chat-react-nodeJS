import React from 'react';

import socket from '../socketClient';
import  LogInForm  from "../pages/LogInPage/index.js";

import './Chat.less';

export function Chat (props) {

    const { isAuthentication } = props

    return (

        <div className='wrapper'>

            { !isAuthentication  && <LogInForm /> }

        </div>

    )
}

