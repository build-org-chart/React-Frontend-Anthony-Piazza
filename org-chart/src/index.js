import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import rootReducer from './reducers';


import './index.css';
import App from './App';


const store = createStore(
    rootReducer,  
    applyMiddleware(logger, thunk)
);  

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));

