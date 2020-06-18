import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import { Link } from "react-router-dom";
import TaskCard from "../ui/taskCard";
import tasks from "../../mock-data/tasks";
import { AddTask } from "../../icons/icons";

export default function AllTasks() {
   return (
      <BodyTemplate>
         <div className="row col d-flex justify-content-between">
            <h1 className="pl-2">All Tasks</h1>

            <Link to="/add-task" className="mt-3 d-inline">
               <AddTask className="addTaskIcon" />
               <p className="addLinkText ml-1 pt-2 d-inline">Add Task</p>
            </Link>
         </div>
         {tasks.map((task) => {
            return <TaskCard task={task.userTask} key={task.id} />;
         })}
      </BodyTemplate>
   );
}
