import React from "react";

class Travel extends React.Component
{
    constructor(props)
    {
        super(props)
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
                <main>
                    <form>
                        <h2> API Call </h2>
                        {this.state.isLoading ? <h3>Loading</h3> : <h3>Data from API : {this.state.character.name}</h3>}
                        <input
                            type = "text"
                            name = "firstName"
                            value = {this.props.data.firstName}
                            onChange = {this.props.handleOnChange}
                            placeholder = "First Name" 
                        />

                        <br />
                        
                        <input
                            type = "text"
                            name = "lastName"
                            value = {this.props.data.lastName}
                            onChange = {this.props.handleOnChange}
                            placeholder = "Last Name" 
                        />

                        <br />
                        <input
                            type = "text"
                            name = "age"
                            value = {this.props.data.age}
                            onChange = {this.props.handleOnChange}
                            placeholder = "Age" 
                        />

                        <br />
                        <label>
                            <input
                                type = "radio"
                                name = "gender"
                                value = "Male"
                                checked = {this.props.data.gender === "Male"}
                                onChange = {this.props.handleOnChange}
                            /> 
                            Male
                        </label>

                        <br />
                        <label>
                            <input
                                type = "radio"
                                name = "gender"
                                value = "Female"
                                checked = {this.props.data.gender === "Female"}
                                onChange = {this.props.handleOnChange}
                            /> 
                            Female
                        </label>
                        
                        <br />
                        <label>
                            Select your destination:
                            <select
                                name = "destination"
                                value = {this.props.data.destination}
                                onChange = {this.props.handleOnChange}
                            >
                                <option value=""></option>
                                <option value="Maldives">Maldives</option>
                                <option value="Switzerland">Switzerland</option>
                                <option value="Scotland">Scotland</option>
                            </select>
                        </label>
                        
                        <br />
                        
                        <label>
                            Dietary Restrictions:
                            <br />
                            <input
                                type = "checkbox"
                                name = "isVegetarian"
                                checked = {this.props.data.isVegetarian}
                                onChange = {this.props.handleOnChange}
                            /> Veg

                            <input
                                type = "checkbox"
                                name = "isNonVegetarian"
                                checked = {this.props.data.isNonVegetarian}
                                onChange = {this.props.handleOnChange}
                            /> Non-Veg

                            <input
                                type = "checkbox"
                                name = "isHinduMeal"
                                checked = {this.props.data.isHinduMeal}
                                onChange = {this.props.handleOnChange}
                            /> Hindu 

                            <input
                                type = "checkbox"
                                name = "isVeganMeal"
                                checked = {this.props.data.isVeganMeal}
                                onChange = {this.props.handleOnChange}
                            /> Vegan 
                        </label>
                        
                        <br /> <br /> <br />
                        
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p>Your name: {this.props.data.firstName} {this.props.data.lastName}</p>
                    <p>Your age: {this.props.data.age}</p>
                    <p>Your gender: {this.props.data.gender}</p>
                    <p>Your destination: {this.props.data.destination}</p>
                    <p>
                        Your dietary restrictions: 
                        {this.props.data.isVegetarian ? "Veg, " : ""} 
                        {this.props.data.isNonVegetarian ? "Non Veg, ": ""} 
                        {this.props.data.isHinduMeal ? "Hindu, " : ""}
                        {this.props.data.isVeganMeal ? "Vegan" : ""}
                    </p>
                </main>
        )
    }
}

export default Travel;
