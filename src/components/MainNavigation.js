import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainNavigation extends Component {
  render () {
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/test">Test</Link>
      </div>
    );
  }
}


export default MainNavigation;
