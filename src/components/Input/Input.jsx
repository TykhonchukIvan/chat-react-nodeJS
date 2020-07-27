import React from 'react';
import PropTypes from 'prop-types';

import './Input.less'

const Input = props => <input className='input-form'{...props} />

Input.propTypes = {
  props: PropTypes.object.isRequired,
};

export default Input;