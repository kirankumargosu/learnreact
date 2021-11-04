import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import AboutMe from './Components/AboutMe'
import App from './App'
import AppProduct from './AppProduct'
import AppTodo from './AppTodo';
import AppCounter from './AppCounter'
import AppConditional from './AppConditional';
import AppLogin from './AppLogin';

function FnMakeList()
{
  return(<div>
    <ul>
      <li>item1</li>
      <li>item2</li>
      <li>item3</li>
    </ul>
  </div>);
}

class MakeList extends React.Component
{
  render()
  {
    return(<div>
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
    </div>);
  }
}



class Ticker extends React.Component
{
  render()
  {
    return (<div>
      <div className="status">Hello World</div>
      <div className="nextPlayer">It is {new Date().toLocaleTimeString()}</div>
    </div>);
  }
}

//ReactDOM.render(<MakeList />, document.getElementById('root'));
//ReactDOM.render(<FnMakeList />, document.getElementById('root'));
//ReactDOM.render(<AboutMe />, document.getElementById('root'));
//ReactDOM.render(<AppProduct />, document.getElementById('root'));
//ReactDOM.render(<AppTodo />, document.getElementById('root'));
//ReactDOM.render(<AppCounter />, document.getElementById('root'));
//ReactDOM.render(<AppConditional />, document.getElementById('root'));
ReactDOM.render(<AppLogin />, document.getElementById('root'));


function tick() 
{
  ReactDOM.render(<Ticker />, document.getElementById('root'));
}

//setInterval(tick, 1000);
