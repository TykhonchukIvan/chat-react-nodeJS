import React from 'react';
import './Message.less'
import PropTypes from 'prop-types';

const Message = ({ massages }) => {

  return (
    <div className='messages-container'>
      {
        massages.map(message => (
          <div className='message_wrapper'>
            <div className='message_wrapper-name'>
              <div className='message_wrapper-login'>
                <span>
                Name: {message.login}
                </span>
              </div>
              <div className='message_wrapper-time'>
                Time: {message.time}
              </div>
            </div>
            <div className='message_wrapper-text'>
                {message.text}
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