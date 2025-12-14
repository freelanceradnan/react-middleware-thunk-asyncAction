// export const counterReducer=(state=0,action)=>{
//    switch(action.type){
//     case "counter/increase":{
//         return state+action.payload
//     }
//     case "counter/decrease":{
//         return state-action.payload
//     }
//   default:{
//    return state
//     }
//    }



// import { createReducer } from "@reduxjs/toolkit";
// export const CounterReducer=createReducer(0,(builder)=>{
//     builder
//     .addCase('counter/increase',(state,action)=>{
//         
//     })
//     .addCase('counter/decrease',(state,action)=>{
//         
//     })
// })
import { createSlice } from "@reduxjs/toolkit";
// import { counterReducer } from './CounterReducer';
const CounterSlice=createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increase:(state,action)=>{
 return state+action.payload
        },
    decrease:(state,action)=>{
    return state-action.payload
    }}
})
export const {increase,decrease}=CounterSlice.actions
export default CounterSlice.reducer
