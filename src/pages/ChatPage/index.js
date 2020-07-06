import React from 'react';
import { connect }  from 'react-redux';
import { ChatPage } from "./ChatPage";
import {getLoginForm} from "../../redux";


const ChatPageContainer = props => <ChatPage {...props}/>

const mapStateToProps = state => ({
    form: getLoginForm(state),
})
const mapDispatchToProps = {

}

export default connect(mapStateToProps)(ChatPageContainer);