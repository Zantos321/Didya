import React from "react";
import BodyTemplate from "../ui/BodyTemplate";

export default function HomePage() {
   return (
      <BodyTemplate>
         <div className="row col">
            <h1 className="pl-2">Home Page</h1>
         </div>
         <div className="row col-12 justify-content-center mb-4">
            <div className="card col-8 border-dark ">
               <h5 className="card-header">Didya....</h5>
               <div className="card-body">
                  <p className="card-text ">
                     This is a task that takes no longer than 15 minutes.
                  </p>
               </div>
            </div>
         </div>
      </BodyTemplate>
   );
}
