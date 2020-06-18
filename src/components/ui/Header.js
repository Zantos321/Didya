import React from "react";
import appLogo from "../../images/DIDYA-Logo-PURPLE.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div className="navbar navbar-light navbar-expand d-flex justify-content-between">
         <div>
            <Link to="/home">
               <img
                  src={appLogo}
                  width="100px;"
                  alt="didya Logo"
                  className="navbar-brand pl-3"
               />
            </Link>
         </div>
         <div>
            <Link to="/all-tasks" className="navbar-item nav-link d-inline">
               All Tasks
            </Link>
            <Link to="/" className="navbar-item nav-link d-inline">
               Log out
            </Link>
         </div>
      </div>
   );
}
