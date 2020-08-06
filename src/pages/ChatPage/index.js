import React from 'react';
import { connect }  from 'react-redux';
import ChatPage from './ChatPage.jsx';
import { getLoginForm, getMessagesText, getUsers } from "../../redux";
import { messagesActions, usersActions } from '../../redux/actions/actions';

const mapStateToProps = state => ({
    form: getLoginForm(state),
    messages: getMessagesText(state),
    users: getUsers(state),
})
const mapDispatchToProps = {
    getMessages: messagesActions.setMessages,
    setMassagesServer: messagesActions.setMassagesServer,
    setUsers: usersActions.setUsers,
    setUsersServer: usersActions.setUsersServer,
    setUsersSaga: usersActions.setUsersSaga,
    getUsersSaga: usersActions.getUsersSaga,
    clear: messagesActions.clearTextarea,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);