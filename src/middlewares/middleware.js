
export const ourMiddleWare=(store)=>(next)=>(action)=>{

    console.log(JSON.stringify(store.getState()),"store state")
    console.log(action,"action")
    next(action)
}