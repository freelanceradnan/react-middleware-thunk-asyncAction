import { createBrowserRouter } from "react-router-dom";
import Root from "./root/root";
import Posts from "../pages/posts";
import PostDetails from "../pages/postDetails";

export const router=createBrowserRouter([
    {path:"/",element:<Root/>,children:[
{path:"/posts",index:true,element:<Posts/>},
{path:"/details",index:true,element:<PostDetails/>},
    ]},
    
])