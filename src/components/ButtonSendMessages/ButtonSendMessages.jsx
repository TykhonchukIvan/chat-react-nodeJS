import React from 'react';
import PropTypes from 'prop-types';

import './ButtonSendMessages.less'

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