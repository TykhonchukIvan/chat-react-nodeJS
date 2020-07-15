import React from 'react';
import PropTypes from 'prop-types';

import './Input.less'

const Input = props => {
  console.log( typeof props)
  return (
    <input className='input-form'{...props} />
    )
}

Input.propTypes = {
  props: PropTypes.object.isRequired,
}

export default Input;