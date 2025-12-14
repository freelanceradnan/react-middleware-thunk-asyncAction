import {applyMiddleware, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import CounterReducer  from '../assets/reducers/CounterReducer';
import { ourMiddleWare } from '../middlewares/middleware';



export const store=createStore(CounterReducer,composeWithDevTools(applyMiddleware(ourMiddleWare)))