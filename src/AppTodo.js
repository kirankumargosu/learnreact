import React from "react";
import TodosData from "./data/TodosData";
import Todo from "./components/Todo";

function AppTodo(props)
{
    const todoComponents = TodosData.map(item => <Todo key = {item.id} todo={item}/>)
    return(
        <div>
            {todoComponents}
        </div>
    )
}

export default AppTodo