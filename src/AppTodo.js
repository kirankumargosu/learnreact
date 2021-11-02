import React from "react";
import TodosData from "./data/TodosData";
import Todo from "./views/Todo";

class AppTodo extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            todosData : TodosData
        };
    }
    render()
    {
        const todoComponents = this.state.todosData.map(item => <Todo key = {item.id} todo={item}/>)
        return(
            <div>
                {todoComponents}
            </div>
        );
    }
}

export default AppTodo