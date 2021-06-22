import logo from "./logo.svg";
import "./App.css";
import { render } from "react-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
    <div className="logos">
        <img
          src="./assets/images/ironhack-logo.svg"
          className="App-logo"
          alt="logo"></img>
        <p>
           <code>src/App.js</code> and save to reload.
        </p>
        <a>
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        
          Learn React
        </a>
    
      <div className='body'>
      <h1>Say hello to React</h1>
      <p>
        You will learn a Frontend
        framework from scratch, to
        become an Ninja Developer.
      </p> 
      <Button/>   
    </div>
    <div className="logos">
                <div>
                    <img src="images/icon1.png" alt="icon1"></img>
                    <h3>Declarative</h3>
                    <p>React makes it painless to create interactive UIs</p>
                </div>
                <div>
                    <img src="images/icon2.png" alt="icon2"></img>
                    <h3>Components</h3>
                    <p>Build encapsulated components that manage their state.</p>
                </div>
                <div>
                    <img src="images/icon3.png" alt="icon3"></img>
                    <h3>Single-way</h3>
                    <p>A set of immutable values are passed to the components.</p>
                </div>
                <div>
                    <img src="images/icon4.png"alt="icon4"></img>
                    <h3>JSX</h3>
                    <p>Statically-typed designed to run on modern browsers.</p>
                </div>
            </div>
        </div>
    ) </header>
  }

export default App;

import React, { Component } from 'react'

class Button extends Component{
  render(){
    return (
    }
      <div>
        <button className='Button'>Awesome!</button>
      </div>

    )
  }

}

export default Button 

