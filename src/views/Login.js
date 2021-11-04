import React from "react";

class Login extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            isLoggedIn : false
        };
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleLogin()
    {
        this.setState(prevState => {return {isLoggedIn: !prevState.isLoggedIn}});
    }


    render()
    {
        return (
            <div>
                <h1> User is currently logged {this.state.isLoggedIn ? 'in' : 'out'}</h1>
                <button onClick={this.handleLogin}> {this.state.isLoggedIn ? 'Log out' : 'Log in' } </button>
            </div>
        )
    }
}

export default Login;
