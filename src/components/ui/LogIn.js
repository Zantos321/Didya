import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      <div className="mt-5 col-12">
         <div className="card">
            <div className="card-body">
               <div className="landing-card">
                  <h2 className="login-title text-bold">LOGIN</h2>

                  <div className="form-group" id="login-form">
                     <label className="input-text sr-only" htmlFor="email">
                        Email Address
                     </label>
                     <input
                        type="email"
                        className="form-control landing-input mb-3"
                        id="loginEmail"
                        placeholder="EMAIL ADDRESS"
                     />
                     <div className="form-group" id="login-form">
                        <label
                           className="input-text sr-only"
                           htmlFor="password"
                        >
                           Password
                        </label>
                        <input
                           type="password"
                           className="form-control landing-input"
                           id="loginPassword"
                           placeholder="PASSWORD"
                        />
                     </div>
                     <Link
                        to="/home"
                        className="btn landing-submit-button btn-md "
                     >
                        SUBMIT
                     </Link>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
