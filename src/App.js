import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock.jsx';
import Weather from './weather.jsx';
import Tabs from './tabs.jsx';

const tabs = [
  {title: 'Anime', content: "I'm an otaku!"},
  {title: 'Butts', content: "I love butts!"},
  {title: 'Food', content: "I'm a foodie!"},
  {title: 'Cats', content: "My cats name is Kuro!"}
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="wrapper">
          <Clock/>
          <Tabs tabs={tabs}/>
          <Weather/>
        </div>
      </div>
    );
  }
}

export default App;
