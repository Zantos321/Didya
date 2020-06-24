import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import TaskCard from "../ui/TaskCard";
import { AddTask } from "../../icons/Icons";

class AllTasks extends React.Component {
   render() {
      const tasks = this.props.queuedTasks[this.props.indexOfCurrentTask];
      return (
         <BodyTemplate>
            <div className="row col d-flex justify-content-between">
               <h3 className="pl-2 mt-3 ml-2">ALL TASKS</h3>

               <Link to="/add-task" className="mt-3 d-inline float-right">
                  <AddTask className="addTaskIcon" />
               </Link>
            </div>
            {/* {tasks.map((task) => {
               return <TaskCard task={task.userTask} key={task.id} />;
            })} */}
         </BodyTemplate>
      );
   }
}

function mapStateToProps(state) {
   return {
      queuedTasks: state.queuedTasks,
      indexOfCurrentTask: state.indexOfCurrentTask,
   };
}

export default connect(mapStateToProps)(AllTasks);
