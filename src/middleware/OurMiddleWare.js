export const ourMiddleWare=(store)=>(next)=>(action)=>{
 console.log(JSON.stringify(store.getState()),"store State")
 console.log(action,"action")
 next(action)
}