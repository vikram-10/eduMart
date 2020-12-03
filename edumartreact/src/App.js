import logo from './logo.svg';
import astro from './Astronaut/Astronaut/astro.svg';
import './App.css';
import {fadeIn} from 'react-animations';
import Header from './Components/Header'
import {useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="headingText w3-animate-left">
      <h1 id="headerFont">All your Scholastic Requirements<br/>with just a single vendor!</h1>
      </div>
      <div className="w3-animate-opacity">
      <img id="astroimg" src={astro} className="astronaut"/>
      </div>
            <div className="startButton">
            <button className="btn btn-primary">Get Started!</button>
            </div>
    </div>
  );
}

export default App;
