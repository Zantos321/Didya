import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../ui/Navigation";
import Header from "../ui/Header";
import TaskCard from "../ui/taskCard";
import tasks from "../../mock-data/tasks";
const demoTask = tasks[0];

console.log(demoTask);

export default function AllTasks() {
   return (
      <div className="container">
         <Header />
         <Navigation />
         <h1 className="text-center">All Tasks</h1>
         {tasks.map((task) => {
            return <TaskCard task={task.userTask} key={task.id} />;
         })}
         <div className="row justify-content-center">
            <Link to="/add-task" className="btn btn-primary ">
               Add Task
            </Link>
         </div>
      </div>
   );
}
