import React from "react";
import Login from "./views/Login"

class AppLogin extends React.Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        return (
        <div>
            <Login />
        </div>)
    }
}

export default AppLogin;
