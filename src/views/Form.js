import React from "react";

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            firstName: "",
            lastName: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event)
    {
        // this.setState(
        //     {
        //         [event.target.name]: event.target.value,
        //     }
        // )

        const {name, value} = event.target
        this.setState(
            {
                [name]: value,
            }
        )
    }

    render()
    {
        return (
            <div>
                <h1>
                    <input 
                        type = "text"
                        placeholder = "First Name"
                        name = "firstName"
                        value = {this.state.firstName}
                        onChange = {this.handleChange}
                    />

                    <input 
                        type = "text"
                        placeholder = "Last Name"
                        name = "lastName"
                        value = {this.state.lastName}
                        onChange = {this.handleChange}     
                    />
                    
                </h1>

                <h1>
                    {this.state.firstName} {this.state.lastName}
                </h1>
            </div>
        )
    }
}

export default Form;
