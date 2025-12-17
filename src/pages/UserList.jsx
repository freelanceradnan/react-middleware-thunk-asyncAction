import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

export const UserList = () => {
    const {isLoading,users,errorMessage}=useSelector((storeState)=>storeState.user)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch('fake-user-dispatch')
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