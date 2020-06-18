import React from "react";
import { Link } from "react-router-dom";
import { EditIcon } from "../../icons/Icons";

export default function TaskCard(props) {
   return (
      <div className="row col">
         <ul className="list-group col-11 list-line">
            <li className="list-group-item all-list-text rounded-0">
               {props.task}
            </li>
         </ul>
         <Link to="/edit-task" className="float-right ml-2 mt-3 d-inline">
            <EditIcon className="editTaskIcon" />
         </Link>
      </div>
   );
}
