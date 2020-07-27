import React from 'react';
import './Message.less'
import PropTypes from 'prop-types';

const Message = ({ massages }) => {

  return (
    <div className='messages'>
      {
        massages.map(massage => (
          <div>
            <p>
              {massage.text}
            </p>
            <div>
              <span>
              {massage.login}
              </span>
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