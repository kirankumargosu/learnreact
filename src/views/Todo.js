import React from "react";

function handleToDoChange()
{

}

function Todo(props)
{
    return(
        <div className="todo-item"> 
            <input onChange={handleToDoChange} 
                   type="checkbox" 
                   checked = {props.todo.completed}/> 
            <p>{props.todo.text}</p>
        </div>
    )
}

export default Todo