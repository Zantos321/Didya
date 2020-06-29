import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queuedTasks from "./reducers/queuedTasks";
import editableTask from "./reducers/editableTask";

export default combineReducers({
   currentUser,
   queuedTasks,
   editableTask,
});
