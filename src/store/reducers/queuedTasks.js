import actions from "../actions";

export default function queuedTasks(state = [], action) {
   // action.payload, action.type
   switch (action.type) {
      case actions.STORE_QUEUED_TASKS:
         return action.payload;
      default:
         return state;
   }
}
