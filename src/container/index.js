import React from 'react'
import { ChatContainer } from "./Chat.jsx";
import { connect }  from 'react-redux';
import { getIsAuthentication } from "../redux";


const mapStateToProps = state => ({
    isAuthentication: getIsAuthentication(state)
})

export default connect(mapStateToProps)(ChatContainer)