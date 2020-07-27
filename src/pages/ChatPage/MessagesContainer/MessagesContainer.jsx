import React, { useEffect } from 'react';
import socket from "../../../socketClient";
import PropTypes from 'prop-types';

import Message from '../../../components/Message';

const MessagesContainer = ({ messages, setMassagesServer }) => {

  useEffect(()=>{
    socket.on('ROOM:GET_NEW_MESSAGE', (message)=>{ console.log(message) })
  },[])

  return(
    <Message massages={messages}/>
  )
}

Message.propTypes = {
  messages: PropTypes.object,
  setMassagesServer: PropTypes.func.isRequired,
}

export default MessagesContainer;