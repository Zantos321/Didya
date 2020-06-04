import React from "react";
import Navigation from "../ui/Navigation";
import Header from "../ui/Header";

export default function EditTasks() {
   return (
      <div className="container">
         <Header />
         <Navigation />

         <h1 className="text-center">Edit Tasks</h1>
         <div className="row">
            <h2 className="text-danger">
               {" "}
               *Make sure your task does not take longer than 15 minutes*{" "}
            </h2>
            <div className="card border-dark col-12">
               <p className="card-body">
                  This is a task that takes no longer than 15 minutes.
               </p>
            </div>
            <button className="btn btn-secondary col-6">Cancel</button>
            <button className="btn btn-primary col-6">Save</button>
            <div className="custom-control custom-checkbox">
               {/* <input
                  type="checkbox"
                  className="custom-control-input"
                  id="delete-check"
               >
                  <label className="custom-control-label" for="delete-check">
                     Delete Task
                  </label>
               </input> */}
               <button
                  className="btn btn-large btn-outline-danger "
                  id="card-delete"
               >
                  Delete this task
               </button>
            </div>
         </div>
      </div>
   );
}
