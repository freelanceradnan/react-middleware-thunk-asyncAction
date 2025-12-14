// export const increase=(payload)=>{
//     return {
//         type:"counter/increase",
//         payload:payload
//     }
// }
// export const decrease=(payload)=>{
//     return {
//         type:"counter/decrease",
//         payload:payload
//     }

// import { createAction } from "@reduxjs/toolkit";
// export const increase=createAction('counter/increase')
// export const decrease=createAction('counter/decrease')
import { decrease, increase } from "../assets/reducers/CounterReducer";
export {increase,decrease}
