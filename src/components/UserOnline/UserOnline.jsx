import React from 'react';
import PropTypes from 'prop-types';

import './UserOnline.less';

const UserOnline = ({ users }) => {
  return (
    <div className='usersOnlineBody'>
      <b>Online</b>
      <ul>
        {users.map((name, index) => (<li key={index}>{name}</li>))}
      </ul>
    </div>
  )
};

UserOnline.propTypes = {
  users: PropTypes.array,
};

export default UserOnline;