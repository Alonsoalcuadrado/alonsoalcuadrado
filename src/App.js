import React from 'react'
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Contact></Contact>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
