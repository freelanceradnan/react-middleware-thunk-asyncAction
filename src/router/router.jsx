import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Posts from "../pages/posts";
import PostList from "../pages/PostList";
// import PostDetails from "../pages/postDetails";

export const router=createBrowserRouter([
    {path:"/",element:<Root/>,children:[
{path:"/posts",index:true,element:<Posts/>},
{path:"/postdetails",element:<PostList/>},
    ]},
    
])