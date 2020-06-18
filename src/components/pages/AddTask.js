import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import { Link } from "react-router-dom";
import classnames from "classnames";

const MAX_CHAR_COUNT = 50;

export default class AddTask extends React.Component {
   checkIsOverCharLimit() {
      if (
         this.state.userTask.length > MAX_CHAR_COUNT ||
         this.state.userTask.length === 0
      ) {
         return true;
      } else return false;
   }

   setTaskText(e) {
      this.setState({ userTask: e.target.value });
   }

   render() {
      return (
         <BodyTemplate>
            <h3 className="pl-2 mt-3 ml-2">ADD TASK</h3>
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
                  onChange={(e) => this.setTaskText(e)}
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
}
