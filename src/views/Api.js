import thisStringValue from "es-abstract/2015/thisStringValue";
import React from "react";

class Api extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            character: {},
            isLoading: false
        };
    }


    componentDidMount()
    {
        this.setState({isLoading: true});
        fetch("https://swapi.dev/api/people/1/")
            .then(reponse => reponse.json())
            .then(data => {
                            //this.setState(() => { return {character: data}})
                              this.setState(               {character: data,
                                                            isLoading: false
                                                           }
                                           )
                          }
                 );
    }

    render()
    {
        return (
            <div>
                {this.state.isLoading ? <h1>Loading</h1> : <h1>Data from API : {this.state.character.name}</h1>}
            </div>
        )
    }
}

export default Api;
