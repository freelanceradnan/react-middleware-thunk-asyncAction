
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CounterApp } from '../reducers/Reducer';
import { ourMiddleWare } from '../middleware/OurMiddleWare';
import {postReducer}  from '../reducers/Posts';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer=combineReducers({
    counter:CounterApp,
    post:postReducer
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(ourMiddleWare)))
