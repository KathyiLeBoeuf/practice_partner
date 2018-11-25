import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CheeseList from './components/cheese-list.js'
import RegistrationPage from './components/registration-page';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <CheeseList />
        <RegistrationPage />
      </div>
    );
  }
}

export default App;
