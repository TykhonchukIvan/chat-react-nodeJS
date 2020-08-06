import React from 'react';
import PropTypes from 'prop-types';

import './Input.less'

const Input = props => <input className='input-form' style={props.style} {...props} />

Input.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Input;