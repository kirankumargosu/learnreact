import React from "react";

import Header from "./views/Header";
import MainContent from "./views/MainContent";
import AboutMe from "./views/AboutMe";
import Footer from "./views/Footer";
import Joke from "./views/Joke";
import JokesData from "./data/JokesData";

function App()
{
    const jokeComponents = JokesData.map(jokedata => <Joke key={jokedata.id} question={jokedata.question} answer={jokedata.answer} />)
    console.log(jokeComponents)
    return (
        <div>
            <Header />
            <MainContent />
            <AboutMe />

            {jokeComponents}
            <Footer />
        </div>)
}

export default App
