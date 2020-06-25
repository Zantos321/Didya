import { combineReducers } from "redux";
import currentUser from "./reducers/currentUser";
import queuedTasks from "./reducers/queuedTasks";

export default combineReducers({
   currentUser,
   queuedTasks,
});
