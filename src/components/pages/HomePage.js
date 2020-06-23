import React from "react";
import axios from "axios";
import BodyTemplate from "../ui/BodyTemplate";
import diyaDots from "../../images/DIDYA-Logo-PURPLE-dotdotdot.svg";
import { YesIcon } from "../../icons/Icons";
import { NoIcon } from "../../icons/Icons";
import tasks from "../../mock-data/tasks";
import _ from "lodash";
import { render } from "node-sass";
import { bindActionCreators } from "redux";

// shuffles task list and pulls a task
function selectTask() {
   const filteredTasks = tasks.filter((task) => !task.taskCompleted);
   return _.shuffle(filteredTasks)[0];
}

class HomePage extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://raw.githubusercontent.com/Zantos321/didya/master/src/mock-data/tasks.json")
         .then(function (res) {
            // handle success
            console.log(res);
            props.dispatch({
               type: 
            })
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .finally(function () {
            // always executed
         });
   }


   // pulls the initial tasks and sets its state
   // const [currentTask, setCurrentTask] = React.useState(selectTask());

   // function updateTask(userAccepted) {
   //    // updates task completed to true and chooses a random task, otherwise chooses a random task
   //    if (userAccepted) {
   //       const taskIndex = tasks.findIndex(
   //          (task) => task.id === currentTask.id
   //       );
   //       tasks[taskIndex].taskCompleted = true;
   //    }
   //    // resets all tasks if all completed
   //    if (tasks.every((task) => task.taskCompleted)) {
   //       for (const task of tasks) {
   //          task.taskCompleted = false;
   //       }
   //    }
   //    // gets a new current task
   //    setCurrentTask(selectTask());
   // }

   render() {
      return (
         <BodyTemplate>
            <div className="row col">
               <img src={diyaDots} alt="Didya..." className="ml-1 mt-4" />
            </div>
            <div className="row col-12 justify-content-center mb-4">
               <div className="card didyaCard col-8 mb-4">
                  <div className="card-body">
                     <p className="card-text didyaText">
                        {currentTask.userTask}
                     </p>
                  </div>
               </div>
            </div>
            <div className="row d-flex justify-content-around">
               <button className="yesButton" onClick={() => updateTask(true)}>
                  <YesIcon className="yesIcon" />
               </button>
               <button className="noButton" onClick={() => updateTask()}>
                  <NoIcon className="noIcon" />
               </button>
            </div>
         </BodyTemplate>
      );
   }
}

function mapStateToProps() {
}

export default HomePage;
