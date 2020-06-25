import actions from "../actions";

export default function queuedTasks(taskQueue = {}, action) {
   // action.payload, action.type
   let newTaskQueue = { ...taskQueue };
   switch (action.type) {
      case actions.STORE_QUEUED_TASKS:
         newTaskQueue.tasks = action.payload;
         return newTaskQueue;
      case actions.UPDATE_INDEX_OF_CURRENT_TASK:
         newTaskQueue.index += 1;
         return newTaskQueue;
      case actions.RESET_TASK_QUEUE:
         // newTaskQueue.tasks = [];
         newTaskQueue.index = 0;
         return newTaskQueue;
      default:
         return taskQueue;
   }
}
