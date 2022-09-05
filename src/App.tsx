import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionalComponent from './Components/functional-component';
import FirstComponent from './Components/component';
import FirstPureComponent from "./Components/pure-component";

function App() {
  let element = React.createElement(`p`, null, 'Create element via React method');

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          First steps
        </h1>
          {element}
        < FunctionalComponent />
        < FirstComponent />
        < FirstPureComponent />
      </header>
    </div>
  );
}

export default App;
