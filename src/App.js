import React from 'react';
import { Provider } from 'react-redux';
import rootReducer, { initState } from './redux/index';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddlewere from 'redux-saga';
import rootSaga from './redux/saga/rootSaga';

import ChatContainer from "./container";

const sagaMiddleware = createSagaMiddlewere();

const store = createStore (
    rootReducer,
    initState,
    composeWithDevTools( applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ChatContainer/>
            </Provider>
        )
    }
}

export default App;