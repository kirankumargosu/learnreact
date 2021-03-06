import React from "react";
import Travel from "./views/Travel";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class AppTravel extends React.Component
{
    constructor() 
    {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegetarian: false,
            isNonVegetarian: false,
            isHinduMeal: false,
            isVeganMeal: false,
        }
        this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleOnChange(event)
    {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked} ) : this.setState({[name]: value} );
    }

    render() 
    {
        return (<Travel 
                    data = {this.state}
                    handleOnChange = {this.handleOnChange}
                />
               )
    }
}

export default AppTravel;
