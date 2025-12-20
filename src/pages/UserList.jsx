import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from '../middleware/OurMiddleWare';

export const UserList = () => {
    const {isLoading,users,errorMessage}=useSelector((storeState)=>storeState.user)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch(fetchPost)
    },[])
    return (
        <div>
            <h2>all post</h2>
            {isLoading&& <h2>loading....</h2>}
            {errorMessage && <p>errorMessage</p>}
            <ul>
                {users.map(user=>(
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;