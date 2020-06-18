import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import { Link } from "react-router-dom";

export default function AddTask() {
   return (
      <BodyTemplate>
         <h3 className="pl-2 mt-3">ADD TASK</h3>
         <div className="row mb-4 ml-3">
            <h6 className="text-muted">
               {" "}
               TASK SHOULD TAKE LESS THAN 15 MINUTES{" "}
            </h6>
         </div>
         <div className="col">
            <textarea
               rows="4"
               autoFocus={true}
               defaultValue="This is a task that takes no longer than 15 minutes."
               className="editTaskTextArea"
            ></textarea>
         </div>
         <div className="col">
            <div className="row justify-content-between mb-4">
               <Link to="/all-tasks" className="btn edit-cancel col-4 ml-4">
                  CANCEL
               </Link>

               <Link to="/all-tasks" className="btn edit-save col-4 mr-4">
                  SAVE
               </Link>
            </div>
         </div>
      </BodyTemplate>
   );
}
