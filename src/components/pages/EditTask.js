import React from "react";
import Header from "../ui/Header";
import { Link } from "react-router-dom";
import tasks from "../../mock-data/tasks";
import toDisplayDate from "date-fns/format";
const demoTask = tasks[1];

export default class EditTasks extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         checked: false,
      };
   }

   showDeleteButton() {
      this.setState({
         checked: !this.state.checked,
      });
   }

   render() {
      return (
         <div className="container">
            <Header />

            <h1 className="text-center">Edit Tasks</h1>
            <div className="row mb-4 justify-content-center">
               <h2 className="text-danger">
                  {" "}
                  *Make sure your task does not take longer than 15 minutes*{" "}
               </h2>
               <div className="card border-dark col-12 mb-2">
                  <div className="card-body">
                     <textarea
                        autoFocus={true}
                        defaultValue={demoTask.userTask}
                     ></textarea>
                  </div>
               </div>
            </div>
            <div className="row">
               <p className="text-muted">Last Time Completed: </p>
               <p>{toDisplayDate(demoTask.lastDone, "MMM. d, y")}</p>
            </div>
            <div className="row justify-content-center mb-4">
               <Link to="/all-tasks" className="btn btn-warning col-4">
                  Cancel
               </Link>
               <div className="col-2"></div>
               <Link to="/all-tasks" className="btn btn-primary col-4">
                  Save
               </Link>
            </div>
            <div className="custom-control custom-checkbox">
               <div className="row col-auto mb-4">
                  <div className="custom-control custom-checkbox ">
                     <input
                        type="checkbox"
                        className="custom-control-input delete-verify"
                        id="delete-check"
                        checked={this.state.checked}
                        onChange={() => {
                           this.showDeleteButton();
                        }}
                     />
                     <label
                        className="custom-control-label delete-verify"
                        htmlFor="delete-check"
                     >
                        Show delete button
                     </label>
                  </div>
               </div>
               {this.state.checked && (
                  <Link
                     to="/all-tasks"
                     className="btn btn-large btn-outline-danger "
                     id="card-delete"
                  >
                     Delete this task
                  </Link>
               )}
            </div>
         </div>
      );
   }
}
