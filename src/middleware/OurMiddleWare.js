export const ourMiddleWare=(store)=>(next)=>async(action)=>{
 console.log(JSON.stringify(store.getState()),"store State")
 console.log(action,"action")
 if(action==='fake-post-dispatch'){
    store.dispatch({type:"post/fetchStarted"})
    try {
        const res=await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const data=await res.json()
 store.dispatch({type:"post/fetchSucceeded",payload:data})
 
    } catch (error) {
        store.dispatch({type:"post/fetchFailed",payload:error.message})
    }
    return
 }
 if(action=='fake-user-dispatch'){
    store.dispatch({type:"user/fetchStarted"});
    try {
        const res=await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
        const data=await res.json()
        store.dispatch({type:"user/fetchSucceeded",payload:data})
        
    } catch (error) {
        store.dispatch({type:"user/fetchFaild",payload:error.message})
    }
    
 }
next(action)
}