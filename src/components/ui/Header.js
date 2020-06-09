import React from "react";
import appLogo from "../../images/DIDYA-Logo.png";
import { Link } from "react-router-dom";

export default function Header() {
   return (
      <div className="mt-2">
         <img src={appLogo} width="70px;" alt="didya Logo" />
         <Link to="/" className="btn btn-link float-right">
            Log out
         </Link>
      </div>
   );
}
