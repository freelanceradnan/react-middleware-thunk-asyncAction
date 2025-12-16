import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

const PostList = () => {
    const {isLoading,posts,errorMessage}=useSelector((storeState)=>storeState.post)
    const dispatch=useDispatch()
    useEffect(()=>{
    dispatch('fake-post-dispatch')
    },[])
    return (
        <div>
            <h2>all post</h2>
            {isLoading&& <h2>loading....</h2>}
            {errorMessage && <p>errorMessage</p>}
            <ul>
                {posts.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default PostList;