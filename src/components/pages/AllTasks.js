import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import { Link } from "react-router-dom";
import TaskCard from "../ui/TaskCard";
import tasks from "../../mock-data/tasks";
import { AddTask } from "../../icons/Icons";

export default function AllTasks() {
   return (
      <BodyTemplate>
         <div className="row col d-flex justify-content-between">
            <h3 className="pl-2 mt-3">ALL TASKS</h3>

            <Link to="/add-task" className="mt-3 d-inline float-right">
               <AddTask className="addTaskIcon" />
            </Link>
         </div>
         {tasks.map((task) => {
            return <TaskCard task={task.userTask} key={task.id} />;
         })}
      </BodyTemplate>
   );
}
