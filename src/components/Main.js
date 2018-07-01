import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import MiddlewareTest from './MiddlewareTest/MiddlewareTest';

class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route path='/login' component={LoginPage}/>
          <Route path='/sign_up' component={SignUpPage}/>
          <Route exact path='/home' component={Home}/>
          <Route path='/api-middleware' component={MiddlewareTest}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
