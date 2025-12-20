
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CounterApp } from '../reducers/Reducer';
// import { ourMiddleWare } from '../middleware/OurMiddleWare';
import {postReducer}  from '../reducers/Posts';
import {thunk} from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { userReducer } from '../reducers/UserReducer';

const rootReducer=combineReducers({
    counter:CounterApp,
    post:postReducer,
    user:userReducer
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))
