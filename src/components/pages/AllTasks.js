import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import Header from "../ui/Header";

export default function AllTasks() {
   return (
      <div className="container">
         <Header />
         <Navigation />

         <h1 className="text-center">All Tasks</h1>
         <div className="row col-12 justify-content-center">
            <div className="card border-dark col-9 mb-4">
               <p className="card-body ">
                  This is a task that takes no longer than 15 minutes.
               </p>
            </div>
            <Link to="/edit-task" className="btn btn-primary  float-right mb-4">
               Edit
            </Link>
         </div>
         <div className="row col-12 justify-content-center">
            <div className="card border-dark col-9 mb-4">
               <p className="card-body ">
                  This is a task that takes no longer than 15 minutes.
               </p>
            </div>
            <Link to="/edit-task" className="btn btn-primary  float-right mb-4">
               Edit
            </Link>
         </div>
         <div className="row col-12 justify-content-center">
            <div className="card border-dark col-9 mb-4">
               <p className="card-body ">
                  This is a task that takes no longer than 15 minutes.
               </p>
            </div>
            <Link to="/edit-task" className="btn btn-primary  float-right mb-4">
               Edit
            </Link>
         </div>
         <button className="btn btn-primary float-right">Add Task</button>
      </div>
   );
}
