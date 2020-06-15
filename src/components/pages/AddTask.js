import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";

export default function AddTask() {
   return (
      <div className="container">
         <Header />

         <h1 className="text-center">Add Task</h1>
         <div className="row mb-4 justify-content-center">
            <h2 className="text-danger">
               {" "}
               *Make sure your task does not take longer than 15 minutes*{" "}
            </h2>
            <div className="card border-dark col-12 mb-2">
               <div className="card-body">
                  <textarea
                     autoFocus={true}
                     defaultValue="This is a task that takes no longer than 15 minutes."
                  ></textarea>
               </div>
            </div>
            <Link to="/all-tasks" className="btn btn-warning col-4">
               Cancel
            </Link>
            <div className="col-2"></div>
            <Link to="/all-tasks" className="btn btn-primary col-4">
               Save
            </Link>
         </div>
      </div>
   );
}
