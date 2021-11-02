import React from "react";

class Counter extends React.Component
{
    
    constructor()
    {
        super();
        this.state = {
            counter: 0
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

    render()
    {
        return(
            <div className = "counter">
                <div className = "counterNumber">{this.state.counter}</div>
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
