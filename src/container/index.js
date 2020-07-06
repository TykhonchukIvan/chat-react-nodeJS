import React from 'react'
import { Chat } from "./Chat.js";
import { connect }  from 'react-redux';
import { getIsAuthentication } from "../redux";


const ChatContainer = props => <Chat {...props}/>;

const mapStateToProps = state => ({
    isAuthentication: getIsAuthentication(state)
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps)(ChatContainer)