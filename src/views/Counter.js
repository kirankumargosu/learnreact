import React from "react";
import randomcolor from "randomcolor";

class Counter extends React.Component
{
    
    constructor()
    {
        super();
        this.state = {
            counter: 0,
            color: ""
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount()
    {
        this.setState(prevState => { return { counter: prevState.counter + 1 } })
    }
    
    decrementCount()
    {
        this.setState(prevState => { return { counter: prevState.counter - 1 } })
    }

    componentDidUpdate(prevProps, prevState)
    {
        //this.setState(prevState => { return { color: randomcolor()}})
        if(prevState.counter !== this.state.counter)
        {
            this.setState({color: randomcolor()})
        }
    }

    render()
    {
        return(
            <div className = "counter">
                <div style={{color: this.state.color}} className = "counterNumber">{this.state.counter}</div>
                <button className = "upButton" 
                        onClick={this.incrementCount}>
                    Up!
                </button>
                <button className = "downButton" 
                        onClick={this.decrementCount}>
                    Down!
                </button>
            </div>
        )
    }
}

export default Counter;
