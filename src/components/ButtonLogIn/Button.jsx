import React from 'react';
import './Button.less'

const Button = (props) =>{

    return(
        <div className='form-btn' onClick={props.onClick}>
            {props.text}
        </div>
    )

}

export default Button