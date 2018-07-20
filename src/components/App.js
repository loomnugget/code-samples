import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import requiresAuth from './AuthWrapper';
import PublicHomePage from './Public/PublicHomePage';
import MainContainer from './Main/MainContainer';
import LoginPage from './Login/LoginPage';
import SignUpPage from './SignUp/SignUpPage';
import SignUpSuccessPage from './SignUp/SignUpSuccessPage';

import css from './App.scss';

class App extends Component {
  render () {
    return(
      <div className={css.app}>
        <Route exact path='/' component={PublicHomePage}/>

        <Route exact path='/login' component={LoginPage}/>
        <Route exact path='/sign_up' component={SignUpPage}/>
        <Route exact path='/sign_up/:user_id/success' component={SignUpSuccessPage}/>
        <Route path='/main' component={requiresAuth(MainContainer)}/>
      </div>
    );
  }
}

export default App;
