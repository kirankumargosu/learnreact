import React from "react";

function Todo(props)
{
    return(
        <div className="todo-item"> 
            <input type="checkbox" checked = {props.todo.completed}/> 
            {props.todo.text}
        <hr></hr>
        </div>
    )
}

export default Todo