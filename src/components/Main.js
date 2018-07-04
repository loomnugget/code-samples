import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import MiddlewareTest from './MiddlewareTest/MiddlewareTest';
import css from './Main.scss';

class Main extends Component {
  render () {
    return(
      <div>
        <div className={css.overlay}>
          <div className={css.content}>
            <Switch>
              <Route exact path='/' component={LoginPage}/>
              <Route exact path='/sign_up' component={SignUpPage}/>
            </Switch>
          </div>
        </div>

        <Switch>
          <Route exact path='/home' component={Home}/>
          <Route exact path='/api-middleware' component={MiddlewareTest}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
