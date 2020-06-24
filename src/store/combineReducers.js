import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queuedTasks from "./reducers/queuedTasks";
import indexOfCurrentTask from "./reducers/indexOfCurrentTask";

export default combineReducers({
   currentUser,
   queuedTasks,
   indexOfCurrentTask,
});
