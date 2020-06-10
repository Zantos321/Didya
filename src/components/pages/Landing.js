import React from "react";
import { Link } from "react-router-dom";
import landingLogo from "../../images/DIDYA-Logo.png";

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
            <div className="row justify-content-center">
               <h6 className="mt-8 mb-8">Sponsored by Geocities</h6>
            </div>
            <div className="row justify-content-center">
               <div className=" col-10  col-sm-9  col-md-4  col-lg-4  col-xl-4 mb-6">
                  <div className="card">
                     <div className="card-body">
                        <div className="landing-card">
                           <h2 className="login-title">Login</h2>
                           <p className="card-text">
                              Login with your email address and password
                           </p>
                           <div className="form-group" id="login-form">
                              <label className="input-text" htmlFor="email">
                                 Email Address
                              </label>
                              <input
                                 type="email"
                                 className="form-control"
                                 id="loginEmail"
                              />
                              <div className="form-group" id="login-form">
                                 <label
                                    className="input-text"
                                    htmlFor="password"
                                 >
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
                                 className="btn btn-success btn-lg btn-landing btn-block"
                              >
                                 Log in
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div className=" col-10  col-sm-9 col-md-4 col-lg-4  col-xl-4">
                  <div className="card">
                     <div className="card-body">
                        <div className="landing-card">
                           <h2 className="signup-title">Sign Up</h2>
                           <p className="card-text">
                              Sign Up with your email address and password
                           </p>
                           <div className="form-group" id="signup-form">
                              <label className="input-text" htmlFor="email">
                                 Email Address
                              </label>
                              <input
                                 type="email"
                                 className="form-control"
                                 id="signupEmail"
                              />
                              <div className="form-group" id="signup-form">
                                 <label
                                    className="input-text"
                                    htmlFor="password"
                                 >
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
      </div>
   );
}
