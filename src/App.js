import React from "react";

import Header from "./components/Header";
import MainContent from "./components/MainContent";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Joke from "./components/Joke";
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
