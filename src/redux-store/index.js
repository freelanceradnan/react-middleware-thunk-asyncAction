
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { CounterApp } from '../reducers/Reducer';
import { ourMiddleWare } from '../middleware/OurMiddleWare';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer=combineReducers({
    counter:CounterApp
})
export const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(ourMiddleWare)))
