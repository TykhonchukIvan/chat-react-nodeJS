import React from 'react';
import { connect }  from 'react-redux';
import { ChatPage } from './ChatPage.jsx';
import {getLoginForm, getMessagesText, getUsers } from "../../redux";
import { messagesActions, usersActions } from '../../redux/actions/actions';

const mapStateToProps = state => ({
    form: getLoginForm(state),
    messages: getMessagesText(state),
    users: getUsers(state),
})
const mapDispatchToProps = {
    getMessages: messagesActions.setMessages,
    setUsers: usersActions.setUsers,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);