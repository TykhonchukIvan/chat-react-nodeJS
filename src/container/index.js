import React from 'react'
import { Chat } from "./Chat";
import { connect }  from 'react-redux';
import { getLoginForm } from "../redux/index";
import { getIsAuthentication } from "../redux/index";
import { loginActions } from "../redux/actions/actions";


const ChatContainer = props => <Chat {...props}/>;

const mapStateToProps = state => ({
    form: getLoginForm(state),
    isAuthentication: getIsAuthentication(state)
})
const mapDispatchToProps = {
    setForm: loginActions.setForm,
    onLogin: loginActions.onLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)