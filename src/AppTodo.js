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
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(id)
    {
        this.setState(prevState => 
            {
                const updatedTodos = prevState.todosData.map(todo => 
                    {
                        if (todo.id === id) 
                        {
                            todo.completed = !todo.completed
                        }
                        return todo
                    })
                return {
                    todosData: updatedTodos
                }
            })
    }

    render()
    {
        const todoComponents = this.state.todosData.map(item => 
                                                        <Todo key = {item.id} 
                                                              todo = {item}
                                                              handleChange = {this.handleChange}
                                                        />
                                                       )
        return(
            <div>
                {todoComponents}
            </div>
        );
    }
}

export default AppTodo
