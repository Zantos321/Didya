import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <div className="landing-background">
         <div className="container-fluid">
            <div className="row justify-content-center">
               <h1 className="mt-8 text-white">Welcome to Didya</h1>
            </div>
            <div className="row justify-content-center">
               <h6 className="mt-8 text-white">Sponsered by Geocities</h6>
            </div>
            <div className="card-deck mt-8">
               <div className="card">
                  <div className="card-body">
                     <div className="landing-card">
                        <h2 className="login-title">Login</h2>
                        <p className="card-text">
                           Login with your email address and password
                        </p>
                        <div className="form-group" id="login-form">
                           <label className="input-text" htmlfor="email">
                              Email Address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="loginEmail"
                           />
                           <div className="form-group" id="login-form">
                              <label className="input-text" htmlFor="password">
                                 Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control"
                                 id="loginPassword"
                              />
                           </div>
                           <Link
                              to="/home"
                              id="loginVerify"
                              className="btn btn-success btn-lg btn-landing btn-block"
                           >
                              Log in
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="card">
                  <div className="card-body">
                     <div className="landing-card">
                        <h2 className="signup-title">Sign Up</h2>
                        <p className="card-text">
                           Sign Up with your email address and password
                        </p>
                        <div className="form-group" id="signup-form">
                           <label className="input-text" htmlfor="email">
                              Email Address
                           </label>
                           <input
                              type="email"
                              className="form-control"
                              id="signupEmail"
                           />
                           <div className="form-group" id="signup-form">
                              <label className="input-text" htmlFor="password">
                                 Password
                              </label>
                              <input
                                 type="password"
                                 className="form-control"
                                 id="signupPassword"
                              />
                           </div>
                           <Link
                              to="/add-task"
                              id="signUpVerify"
                              className="btn btn-success btn-lg btn-landing btn-block"
                           >
                              Sign Up
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
