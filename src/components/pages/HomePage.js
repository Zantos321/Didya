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
         <div className="row col-12 justify-content-center mb-4">
            <div className="card col-8 border-dark ">
               <h5 className="card-header">Didya....</h5>
               <div className="card-body">
                  <p className="card-text ">
                     This is a task that takes no longer than 15 minutes.
                  </p>
               </div>
            </div>
            <button className="btn btn-success ml-2">Yes</button>
            <button className="btn btn-danger ml-2">No</button>
         </div>
         <div className="row justify-content-center">
            <Link to="/all-tasks" className="btn btn-primary">
               All Tasks
            </Link>
         </div>
      </div>
   );
}
