import React from 'react';
import { connect }  from 'react-redux';

import MessagesContainer from './MessagesContainer.jsx';
import { getMessagesTextServer } from '../../../redux';
import { messagesActions, usersActions } from '../../../redux/actions/actions';


const mapStateToProps = state => ({
  messages: getMessagesTextServer(state),
})
const mapDispatchToProps = {
  setMassagesServer: messagesActions.setMassagesServer,
}

export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);
