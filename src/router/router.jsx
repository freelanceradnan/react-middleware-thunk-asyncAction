import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Posts from "../pages/posts";
import PostList from "../pages/PostList";
import { UserList } from "../pages/UserList";
// import PostDetails from "../pages/postDetails";

export const router=createBrowserRouter([
    {path:"/",element:<Root/>,children:[
{path:"/userlist",index:true,element:<UserList/>},
{path:"/postdetails",element:<PostList/>},
    ]},
    
])