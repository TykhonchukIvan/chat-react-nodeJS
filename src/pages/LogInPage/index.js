import React from 'react';
import { connect }  from 'react-redux';
import LoginForm from "./LogInPage.jsx";
import { getLoginForm } from "../../redux";
import { loginActions } from "../../redux/actions/actions";

const LoginFormContainer = props => <LoginForm {...props}/>;

const mapStateToProps = state => ({
    form: getLoginForm(state),
})
const mapDispatchToProps = {
    setForm: loginActions.setForm,
    sendFormSaga: loginActions.sendFormSaga,
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginFormContainer);