import React from "react";
import Navigation from "../ui/Navigation";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

export default function EditTasks() {
   return (
      <div className="container">
         <Header />
         <Navigation />

         <h1 className="text-center">Edit Tasks</h1>
         <div className="row mb-4 justify-content-center">
            <h2 className="text-danger">
               {" "}
               *Make sure your task does not take longer than 15 minutes*{" "}
            </h2>
            <div className="card border-dark col-12 mb-2">
               <p className="card-body">
                  This is a task that takes no longer than 15 minutes.
               </p>
            </div>
            <Link to="/all-tasks" className="btn btn-secondary col-4">
               Cancel
            </Link>
            <div className="col-2"></div>
            <Link to="/all-tasks" className="btn btn-primary col-4">
               Save
            </Link>
         </div>
         <div className="custom-control custom-checkbox">
            <div className="row col-auto mb-4">
               <div className="custom-control custom-checkbox ">
                  <input
                     type="checkbox"
                     className="custom-control-input delete-verify"
                     id="delete-check"
                  />
                  <label
                     className="custom-control-label delete-verify"
                     htmlFor="delete-check"
                  >
                     Show delete button
                  </label>
               </div>
            </div>
            <Link
               to="/all-tasks"
               className="btn btn-large btn-outline-danger "
               id="card-delete"
            >
               Delete this task
            </Link>
         </div>
      </div>
   );
}
