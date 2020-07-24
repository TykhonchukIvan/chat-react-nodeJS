import React, { useEffect } from 'react';
import socket from "../../../socketClient";
import Message from '../../../components/Message';

const MessagesContainer = ({ messages, setMassagesServer }) => {

  useEffect(()=>{
    socket.on('ROOM:GET_NEW_MESSAGE', (message)=>{ setMassagesServer(message) })

  },[])

  return(
    <div>
      <Message massages={messages}/>
    </div>
  )
}

export default MessagesContainer;