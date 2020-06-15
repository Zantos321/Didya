import React from "react";
import appLogo from "../../images/DIDYA-Logo-PURPLE.svg";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div className="navbar navbar-light navbar-expand">
         <img
            src={appLogo}
            width="100px;"
            alt="didya Logo"
            className="navbar-brand mr-auto ml-3"
         />
         <Link to="/home" className="navbar-item nav-link d-inline">
            Home
         </Link>
         <Link to="/all-tasks" className="navbar-item nav-link d-inline ">
            All Tasks
         </Link>
         <Link to="/add-task" className="navbar-item nav-link d-inline">
            Add Task
         </Link>
         <Link to="/" className="navbar-item nav-link d-inline">
            Log out
         </Link>
      </div>
   );
}
