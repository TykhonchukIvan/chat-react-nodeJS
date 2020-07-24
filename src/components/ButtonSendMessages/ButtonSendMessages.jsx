import React from 'react';
import './ButtonSendMessages.less'
import PropTypes from 'prop-types';

const ButtonSendMessages = (props) =>{
  const { onClick } = props
    return(
        <div className='chat__send-btn' onClick={onClick}>
            Send
        </div>
    )
};

ButtonSendMessages.propTypes = {

};

export default ButtonSendMessages