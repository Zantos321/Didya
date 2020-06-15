import React from "react";
import landingLogo from "../../images/DIDYA-Logo-PURPLE-and-WHITE.svg";
import SignUp from "../ui/SignUp";

export default function Landing() {
   return (
      <div className="landing-background">
         <div className="container-fluid">
            <div className="row">
               <div className="col mt-2 text-center">
                  <img
                     className="img-fluid"
                     src={landingLogo}
                     alt="Welcome to Didya"
                     id="landing-image"
                  />
               </div>
            </div>
         </div>
         <div className="row justify-content-center">
            <SignUp />
         </div>
      </div>
   );
}
