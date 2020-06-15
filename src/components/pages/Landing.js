import React from "react";
import landingLogo from "../../images/DIDYA-Logo-PURPLE-and-WHITE.svg";
import LogIn from "../ui/LogIn";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
            <LogIn />
         </div>
         <Link to="/signup" className="btn signup-button btn-lg mt-4 ml-4">
            SIGN UP
         </Link>
      </div>
   );
}
