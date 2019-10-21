import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Avatar'
import Avatar from "./Avatar";

function App() {
    const square = {
      borderRadius:25
    };
    const circle = {
        borderRadius: 50
    };
  return (
    <div className="App">
      <header className="App-header">

          <Avatar imgUrl={"http://eskipaper.com/images/cool-3d-wallpaper-4.jpg"} width={200} height={200} shape={circle.borderRadius} name={"Circle"} />
          <Avatar imgUrl={"http://eskipaper.com/images/cool-3d-wallpaper-4.jpg"} width={200} height={200} shape={square.borderRadius} name={"Square"}/>
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
