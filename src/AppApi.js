import React from "react";
import Api from "./views/Api";

class AppApi extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <Api />
            </div>
        )
    }
}

export default AppApi;
