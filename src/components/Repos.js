import React from 'react';
import NavLink from './NavLink';

function Repos(props){
  return(
    <div>
      <h2>Repos</h2>
      <ul>
        <li><NavLink to="/repos/sssyed/wdi-robots"> WDI Robots</NavLink></li>
        <li><NavLink to="/repos/sssyed/arduino"> Arduino </NavLink></li>
      </ul>
      { props.children }
    </div>
  );
}

export default Repos;
