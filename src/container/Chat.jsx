import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import LogInPage from "../pages/LogInPage";
import ChatPage from "../pages/ChatPage"

import './Chat.less';

const ChatContainer = ({ isAuthentication }) => {
    return (
        <Fragment>
            { !isAuthentication ? <LogInPage /> : <ChatPage/>}
        </Fragment>
    )
};

ChatContainer.propTypes = {
    isAuthentication: PropTypes.bool,
};

export default ChatContainer;

