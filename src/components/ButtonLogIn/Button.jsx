import React from 'react';
import PropTypes from 'prop-types';

import './Button.less';

const Button = ({ onClick, text }) =>{

    return(
        <div className='form-btn' onClick={onClick}>
            {text}
        </div>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
};

export default Button;