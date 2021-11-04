import React from "react";
import Form from "./views/Form";

class AppForm extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {};
    }

    render()
    {
        return(
            <div>
                <Form />
            </div>
        )
    }
}

export default AppForm;
