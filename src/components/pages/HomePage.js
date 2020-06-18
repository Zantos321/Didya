import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import diyaDots from "../../images/DIDYA-Logo-PURPLE-dotdotdot.svg";
import { YesIcon } from "../../icons/Icons";
import { NoIcon } from "../../icons/Icons";

export default function HomePage() {
   return (
      <BodyTemplate>
         <div className="row col">
            <img src={diyaDots} alt="Didya..." className="ml-1 mt-4" />
         </div>
         <div className="row col-12 justify-content-center mb-4">
            <div className="card didyaCard col-8 mb-4">
               <div className="card-body">
                  <p className="card-text didyaText">
                     This is a task that takes no longer than 15 minutes.
                  </p>
               </div>
            </div>
         </div>
         <div className="row d-flex justify-content-around">
            <YesIcon className="yesIcon" />
            <NoIcon className="noIcon" />
         </div>
      </BodyTemplate>
   );
}
