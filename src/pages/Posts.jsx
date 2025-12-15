import { useDispatch, useSelector } from "react-redux";


const Posts = () => {
    const counter=useSelector(storeState=>storeState.counter)
    const dispatch=useDispatch()
    return (
        <div>
            <p>Your value is {counter}</p>
            
            <button onClick={()=>dispatch({type:"counter/increase",payload:1})}>increase</button>
            <button onClick={()=>dispatch({type:"counter/decrease",payload:1})}>decrease</button>
        </div>
    );
};

export default Posts;