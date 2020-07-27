import React from 'react';
import './ButtonSendMessages.less'
import PropTypes from 'prop-types';

const ButtonSendMessages = ({onClick}) =>{
    return(
        <div className='chat__send-btn' onClick={onClick}>
            Send
        </div>
    )
};

ButtonSendMessages.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ButtonSendMessages;