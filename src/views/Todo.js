import { Color, gray } from "jest-matcher-utils/node_modules/chalk";
import React from "react";

function handleToDoChange()
{

}

class Todo extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            statusCompleted: false
        };
    }


    render()
    {
        const completedStyle = {
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecoration: "line-through"
        }
        return(
            <div className="todo-item"> 
                <input type = "checkbox" 
                       checked = {this.props.todo.completed} 
                       onChange = {() => this.props.handleChange(this.props.todo.id)}
                /> 
                <p style = {this.props.todo.completed ? completedStyle : null}>{this.props.todo.text}</p>
            </div>
        )
    }
}

export default Todo
