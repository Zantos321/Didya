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
               <div className="card-body">
                  <p className="card-text ">
                     This is a task that takes no longer than 15 minutes.
                  </p>
               </div>
            </div>
            <Link
               to="/edit-task"
               className="btn btn-primary float-right ml-2 mb-4"
            >
               Edit
            </Link>

            <div className="card border-dark col-9 mb-4">
               <div className="card-body">
                  <p className="card-text ">
                     This is a task that takes no longer than 15 minutes.
                  </p>
               </div>
            </div>
            <Link
               to="/edit-task"
               className="btn btn-primary float-right ml-2 mb-4"
            >
               Edit
            </Link>

            <div className="card border-dark col-9 mb-4">
               <div className="card-body">
                  <p className="card-text ">
                     This is a task that takes no longer than 15 minutes.
                  </p>
               </div>
            </div>
            <Link
               to="/edit-task"
               className="btn btn-primary float-right ml-2 mb-4"
            >
               Edit
            </Link>
         </div>
         <div className="row justify-content-center">
            <Link to="/add-task" className="btn btn-primary ">
               Add Task
            </Link>
         </div>
      </div>
   );
}
