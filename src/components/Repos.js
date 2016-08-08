import React, { Component } from 'react';
import NavLink from './NavLink';
import { browserHistory } from 'react-router';

class Repos extends Component{

  handleSubmit(event){
    event.preventDefault();
    const userName = event.target.elements[0].value;
    const repo = event.target.elements[1].value
    const path = `/repos/${userName}/${repo}`;
    //console.log(path);
    browserHistory.push(path);
  }

  render(){
    return(
      <div>
        <h2>Repos</h2>
        <ul>
          <li><NavLink to="/repos/sssyed/wdi-robots"> WDI Robots</NavLink></li>
          <li><NavLink to="/repos/sssyed/arduino"> Arduino </NavLink></li>
          <li>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <input type="text" placeholder="userName"/>{' '}
              <input type="text" placeholder="repo"/>{' '}
              <button type="submit">Go</button>
            </form>
          </li>
        </ul>
        { this.props.children }
      </div>
    );
  }
}

export default Repos;
