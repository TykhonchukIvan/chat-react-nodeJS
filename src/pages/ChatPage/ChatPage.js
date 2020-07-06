import React, { useEffect } from 'react';

import './ChatPage.less';
import socket from "../../socketClient";

export const ChatPage = (props) =>{

    const { form } = props;

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

    return(
        <div>

        </div>
    )

}