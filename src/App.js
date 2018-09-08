import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YouTube from './components/apiyoutube';

class App extends Component {
  render() {
    if (this.props.loading) {
      <h4>Consultando</h4>
    } else {
      <h4></h4>
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Buscador de YouTube.
        </p>
        
        <YouTube />
      </div>
    );
  }
}

export default App;
