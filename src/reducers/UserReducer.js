const initState={
    isLoading:true,
    users:[],
    errorMessage:""
}
export const userReducer=(state=initState,action)=>{
    switch(action.type){
        case "user/fetchStarted":{
            return{
                ...state,
                isLoading:true,
     
            }
        }
        case "user/fetchSucceeded":{
            return{
                ...state,
                isLoading:false,
                users:action.payload,
                errorMessage:""
            }
        }
        case "user/fetchFaild":{
            return{
                ...state,
                isLoading:false,
                errorMessage:action.payload
            }
        }
        default:{
            return initState
        }
    }
}