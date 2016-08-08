import React, { Component } from 'react';
import NavLink from './NavLink';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
      <h1>app component</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
