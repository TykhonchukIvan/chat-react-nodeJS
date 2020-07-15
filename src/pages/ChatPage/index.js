import React from 'react';
import { connect }  from 'react-redux';
import { ChatPage } from './ChatPage.jsx';
import {getLoginForm, getMessagesText } from "../../redux";
import { messagesActions } from '../../redux/actions/actions';

const mapStateToProps = state => ({
    form: getLoginForm(state),
    messages: getMessagesText(state),
})
const mapDispatchToProps = {
    getMessages: messagesActions.setMessages,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPage);