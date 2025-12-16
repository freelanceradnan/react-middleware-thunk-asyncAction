import { Outlet, Link } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        

        <nav>
          <ul className="flex-item">
            <li>
              <Link to={`/posts`} className="links">posts</Link>
            </li>
            <li>
              <Link to={`/details`}  className="links">details</Link>
            </li>
             <li>
              <Link to={`/postdetails`}  className="links">details</Link>
            </li>
          </ul>
        </nav>

       <Outlet/>
      </div>
    </>
  );
}
