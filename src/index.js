import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from "redux-thunk";
import {Provider} from 'react-redux';

import burgerBuilderReducer from './store/reducers/burgerBuilderReducer';
import orderFormReducer from "./store/reducers/orderFormReducer";
const rootReducer = combineReducers({
    burgerBuilder: burgerBuilderReducer,
    orderForm: orderFormReducer
});

// Declared the store, using redux Devtools (no middlewares yet):
// const store = createStore(burgerBuilderReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Declared the store, after adding thunk (with applyMiddleware & compose):
// Another way to use the DevTools extension. If not found uses the native redux solutions that doesn't gives us DevTools support then:
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(burgerBuilderReducer, composeEnhancers(applyMiddleware(thunk)));
// Combining both reducers:
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(
    <React.StrictMode>
        {app}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
