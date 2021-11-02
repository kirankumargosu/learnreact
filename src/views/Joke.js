import React from "react";

function Joke(props)
{
    return (<div>
        {<div style={{display: !props.question && "none"}}>Question: {props.question}</div>}
        <div>Answer: {props.answer}</div>
        <hr></hr>
    </div>);
}


export default Joke;
