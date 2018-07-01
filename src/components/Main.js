import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginPage from './LoginPage';
import MiddlewareTest from './MiddlewareTest/MiddlewareTest';

class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/api-middleware' component={MiddlewareTest}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
