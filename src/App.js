import React, { Component } from 'react';
import './App.scss';
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation/>
        <header id="home" className="App-header">
            <p>
                Project started
            </p>
        </header>
      </div>
    );
  }
}

export default App;
