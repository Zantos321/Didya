import React from "react";
import { Link } from "react-router-dom";

export default function TaskCard(props) {
   return (
      <div className="row col-12 justify-content-center">
         <div className="card border-dark col-9 mb-4">
            <div className="card-body all-card-body-text">{props.task}</div>
         </div>
         <Link
            to="/edit-task"
            className="btn btn-primary float-right ml-2 mb-4"
         >
            Edit
         </Link>
      </div>
   );
}
