import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from "redux-thunk"
import { applyMiddleware, createStore, compose } from 'redux'
import { getBitcoinData } from './action-types'
import Immutable from 'immutable'

const composeWithDevTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [
    thunk,
]

const initialState = Immutable.fromJS({
    dashboard: {
        response: {},
        temporaryState: {},
    }
})

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case getBitcoinData.success:
            return state.setIn(["dashboard", "response"], action.response)
        default:
            return state
    }
}


// initialize our store with our single reducer
let store = createStore(
    dashboardReducer,
    composeWithDevTool(applyMiddleware(...middlewares))
)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    app,
    document.getElementById('root')
);
registerServiceWorker();
