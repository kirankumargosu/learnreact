import React from "react";
import Counter from "./views/Counter";

class AppCounter extends React.Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div>
                <Counter />
            </div>
        )
    }
}

export default AppCounter;
