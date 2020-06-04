import React from "react";
import appLogo from "../../icons/DidyaIcon.png";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div>
         <img src={appLogo} width="32px;" alt="didya Logo" />
         <Link to="/" className="btn btn-link float-right">
            Log out
         </Link>
      </div>
   );
}
