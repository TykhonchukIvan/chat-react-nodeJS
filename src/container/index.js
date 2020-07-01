import React from 'react'
import { Login } from "./LogIn";
import { connect }  from 'react-redux';
import { getLoginForm } from "../redux/index";
import { getIsAuthentication } from "../redux/index";
import { loginActions } from "../redux/actions/loginJs";


const LoginContainer = props => <Login {...props}/>;

const mapStateToProps = state => ({
    form: getLoginForm(state),
    isAuthentication: getIsAuthentication(state)
})
const mapDispatchToProps = {
    setForm: loginActions.setForm,
    onLogin: loginActions.onLogin,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)