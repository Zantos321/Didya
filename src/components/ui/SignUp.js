import React from "react";
//import classnames from "classnames";
import { Link } from "react-router-dom";

export default class Signup extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         isDisplayInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   render() {
      return (
         <div className=" mt-5 col-12">
            <div className="card">
               <div className="card-body">
                  <div className="landing-card">
                     <h2 className="signup-title text-bold">SIGN UP</h2>
                     <p className="card-text">
                        Sign Up with your email address and password
                     </p>
                     <div className="form-group" id="signup-form">
                        <label className="input-text sr-only" htmlFor="email">
                           Email Address
                        </label>
                        <input
                           type="email"
                           className="form-control landing-input mb-3"
                           id="signupEmail"
                           placeholder="EMAIL ADDRESS"
                        />
                        <div className="form-group" id="signup-form">
                           <label
                              className="input-text sr-only"
                              htmlFor="password"
                           >
                              Password
                           </label>
                           <input
                              type="password"
                              className="form-control landing-input"
                              id="signupPassword"
                              placeholder="PASSWORD"
                           />
                        </div>
                        <Link
                           to="/add-task"
                           className="btn landing-submit-button btn-md"
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
}
