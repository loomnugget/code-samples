import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import SignUpSuccessPage from './SignUp/SignUpSuccessPage';
import MiddlewareTest from './MiddlewareTest/MiddlewareTest';

class Main extends Component {
  render () {
    return(
      <div>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/sign_up' component={SignUpPage}/>
        <Route exact path='/sign_up/:user_id/success' component={SignUpSuccessPage}/>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/api-middleware' component={MiddlewareTest}/>
      </div>
    );
  }
}

export default Main;
