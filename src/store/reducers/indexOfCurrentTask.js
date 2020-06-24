import actions from "../actions";

export default function indexOfCurrentTask(state = 0, action) {
   //action.GET_USER = "GET_USER"
   switch (action.type) {
      case actions.UPDATE_INDEX_OF_CURRENT_TASK:
         return state + 1;
      default:
         return state;
   }
}
