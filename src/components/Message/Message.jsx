import React from 'react';
import './Message.less'
import PropTypes from 'prop-types';

const Message = ({ massages }) => {

  return (
    <div className='messages-container'>
      {
        massages.map(message => (
          <div className='message'>
            <div className='message-login'>
              <span>
              Name: {message.login}
              </span>
            </div>
            <div className='message-text'>
              Message: {message.text}
            </div>
          </div>
        ))
      }
    </div>
  )
}

Message.propTypes = {
  massages: PropTypes.object.isRequired,
};

export default Message;