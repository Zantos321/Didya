import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
   const url = window.location.pathname;
   const tabActiveOnHome = (url) => {
      if (url.indexOf("home") > 0) {
         return "tab-active";
      } else return "";
   };
   const tabActiveOnAllTasks = (url) => {
      if (url.indexOf("all-tasks") > 0) {
         return "tab-active";
      } else return "";
   };
   const tabActiveOnAdd = (url) => {
      if (url.indexOf("add-task") > 0) {
         return "tab-active";
      } else return "";
   };

   return (
      <div
         className="btn-group d-flex col-12"
         role="navigation"
         aria-label="navigation"
      >
         <Link
            to="/home"
            className={`btn btn-secondary ${tabActiveOnHome(url)}`}
         >
            Home
         </Link>
         <Link
            to="/all-tasks"
            className={`btn btn-secondary tab-separator ${tabActiveOnAllTasks(
               url
            )}`}
         >
            All Tasks
         </Link>
         <Link
            to="/add-task"
            className={`btn btn-secondary tab-separator ${tabActiveOnAdd(url)}`}
         >
            Add Task
         </Link>
      </div>
   );
}
