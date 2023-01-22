import React from "react";
import "./../node_modules/semantic-ui-css/semantic.css"


const Countdown = props =>
(
    <div className="taskToDo">


        <strong>{props.name}</strong> {props.houer} : {props.minut}
        <div className="taskToDoIcon">
            <i className="icon edit" onClick={()=> props.onEditRemove(props.id)}></i>
            <i className="icon times" onClick={() => props.onRemove(props.id)}></i>
        </div>

    </div>

)


export default Countdown;