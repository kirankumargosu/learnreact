import React from "react";
import Conditional from "./views/Conditional"
import Header from "./views/Header";
import MainContent from "./views/MainContent";
import AboutMe from "./views/AboutMe";
import Footer from "./views/Footer";

class AppConditional extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {isLoading : false};
    }

    componentDidMount()
    {
        setTimeout(() => {
                            this.setState(
                            {
                                isLoading: true
                            })
                        }, 
                        1500
                  )
    }

    render()
    {
        return(
            <div>
                <Header />
                <MainContent />
                <AboutMe />
                {this.state.isLoading ? <Conditional /> : <h1> Loading...</h1>}
                <Footer />
            </div>
        )
    }
}

export default AppConditional;
