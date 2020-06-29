import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import actions from "../../store/actions";
import BodyTemplate from "../ui/BodyTemplate";
import diyaDots from "../../images/DIDYA-Logo-PURPLE-dotdotdot.svg";
import { YesIcon } from "../../icons/Icons";
import { NoIcon } from "../../icons/Icons";
import shuffle from "lodash/shuffle";
import without from "lodash/without";

class HomePage extends React.Component {
   originalTaskList;

   constructor(props) {
      super(props);
      if (props.queuedTasks.tasks.length === 0) {
         axios
            .get(
               "https://raw.githubusercontent.com/Zantos321/didya/master/src/mock-data/tasks.json"
            )
            .then((res) => {
               // handle success
               console.log(res);
               this.originalTaskList = res.data;
               const shuffledTasks = shuffle(res.data);
               console.log({ shuffledTasks });
               props.dispatch({
                  type: actions.STORE_QUEUED_TASKS,
                  payload: shuffledTasks,
               });
            })
            .catch((error) => {
               // handle error
               console.log(error);
            });
      }
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

   // // shuffles task list and pulls a task
   // function selectTask() {
   //    const filteredTasks = tasks.filter((task) => !task.taskCompleted);
   //    return _.shuffle(filteredTasks)[0];
   // }

   goToNextTask() {
      // TODO make it randomly display a task
      const removedTask = this.props.queuedTasks.tasks[0];
      const tasks = this.props.queuedTasks.tasks;
      const filteredTasks = without(tasks, removedTask);
      this.props.dispatch({
         type: actions.STORE_QUEUED_TASKS,
         payload: filteredTasks,
      });
      if (filteredTasks[0] === undefined) {
         this.props.dispatch({
            type: actions.RESET_TASK_QUEUE,
            payload: shuffle(this.originalTaskList),
         });
      }
   }

   render() {
      const currentTask = this.props.queuedTasks.tasks[0];
      return (
         <BodyTemplate>
            <div className="row col">
               <img src={diyaDots} alt="Didya..." className="ml-1 mt-4" />
            </div>
            <div className="row col-12 justify-content-center mb-4">
               <div className="card didyaCard col-8 mb-4">
                  <div className="card-body">
                     <p className="card-text didyaText">
                        {currentTask && currentTask.userTask}
                     </p>
                  </div>
               </div>
            </div>
            <div className="row d-flex justify-content-around">
               <button
                  className="yesButton"
                  onClick={() => this.goToNextTask()}
               >
                  <YesIcon className="yesIcon" />
               </button>
               <button className="noButton" onClick={() => this.goToNextTask()}>
                  <NoIcon className="noIcon" />
               </button>
            </div>
         </BodyTemplate>
      );
   }
}

function mapStateToProps(state) {
   return {
      queuedTasks: state.queuedTasks,
   };
}

export default connect(mapStateToProps)(HomePage);
