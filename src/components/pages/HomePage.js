import React from "react";
import { Link } from "react-router-dom";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";

export default function HomePage() {
   return (
      <div className="container">
         <Header />
         <Navigation />

         <h1 className="text-center">Home Page</h1>
         <div className="row">
            <div className="card border-dark col-10 mb-5">
               <p id="RandomTask" className="card-body">
                  This is a task that takes no longer than 15 minutes.
               </p>
            </div>
            <div className="btn-group-vertical col-2 d-inline">
               <button className="btn btn-primary ">Yes</button>
               <button className="btn btn-danger ">No</button>
            </div>
            <Link to="/all-tasks" className="btn btn-primary">
               All Tasks
            </Link>
         </div>
      </div>
   );
}
