
import { AiOutlineLogout, AiOutlineUser } from "react-icons/ai";
import {  HiOutlineClipboardDocumentList  ,HiOutlineAdjustmentsHorizontal} from "react-icons/hi2";

import { Link } from 'react-router-dom';

const NavBar = ({handleShow}) => {


  return (
    <>
       <nav className="navbar shadow">
        <div className="container-fluid">
        <div className=" navbar-brand"> 
        <span
            style={{ color: "#419CA6 " }}
            className="p-2"
          >
         <HiOutlineClipboardDocumentList/>
         </span>
           Task Manager
           <span
            style={{ color: "#402c3c" }}
            className="pe-2 p-3"
            role="button"
            onClick={handleShow}
          >
             <HiOutlineAdjustmentsHorizontal/>
         </span>
           </div>

         <div className="dropdown">
          <img
            width={40}
            height={40}
            className="rounded-circle"
            src="photo demo"
            data-bs-toggle="dropdown"
            role="button"
          />

          
          <div
            className="dropdown-menu dropdown-menu-end pt-3"
            style={{ width: "250px" }}
          >
            <div>
              <div className="Profile text-center">
                <img
                  className="rounded-circle"
                  width={60}
                  height={60}
                  src="demo photo"
                  alt="profile"
                />
               <h6>Demo</h6>
              </div>
              <ul style={{ listStyle: "none" }} className="">
                <Link to={"/profile"} className="profile customHover">
                  <span className="px-1">
                    <AiOutlineUser/>
                  </span>{" "}
                  <span className="side-bar-item-caption">Profile</span>
                </Link>
                <li className="profile customHover">
                  <span className="px-1">
                    <AiOutlineLogout />
                  </span>{" "}
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
       </nav>
    </>
  );
};

export default NavBar;