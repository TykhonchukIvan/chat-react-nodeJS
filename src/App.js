import React from 'react';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import rootReducer, { initState } from './redux/index'

import ChatContainer from "./container";

const store = createStore(
    rootReducer,
    initState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                <ChatContainer/>
            </Provider>
        )
    }
}

export default App


