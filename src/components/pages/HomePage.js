import React from "react";
import BodyTemplate from "../ui/BodyTemplate";
import diyaDots from "../../images/DIDYA-Logo-PURPLE-dotdotdot.svg";
import { YesIcon } from "../../icons/Icons";
import { NoIcon } from "../../icons/Icons";
import tasks from "../../mock-data/tasks";
import _ from "lodash";

// shuffles task list and pulls a task
function selectTask() {
   const filteredTasks = tasks.filter((task) => !task.taskCompleted);
   return _.shuffle(filteredTasks)[0];
}

export default function HomePage() {
   // pulls the initial tasks and sets its state
   const [currentTask, setCurrentTask] = React.useState(selectTask());

   function updateTask(userAccepted) {
      // updates task completed to true and chooses a random task, otherwise chooses a random task
      if (userAccepted) {
         const taskIndex = tasks.findIndex(
            (task) => task.id === currentTask.id
         );
         tasks[taskIndex].taskCompleted = true;
      }
      // resets all tasks if all completed
      if (tasks.every((task) => task.taskCompleted)) {
         for (const task of tasks) {
            task.taskCompleted = false;
         }
      }
      // gets a new current task
      setCurrentTask(selectTask());
   }

   return (
      <BodyTemplate>
         <div className="row col">
            <img src={diyaDots} alt="Didya..." className="ml-1 mt-4" />
         </div>
         <div className="row col-12 justify-content-center mb-4">
            <div className="card didyaCard col-8 mb-4">
               <div className="card-body">
                  <p className="card-text didyaText">{currentTask.userTask}</p>
               </div>
            </div>
         </div>
         <div className="row d-flex justify-content-around">
            <button className="yesButton" onClick={() => updateTask(true)}>
               <YesIcon className="yesIcon" />
            </button>
            <button className="noButton" onClick={() => updateTask(true)}>
               <NoIcon className="noIcon" />
            </button>
         </div>
      </BodyTemplate>
   );
}
