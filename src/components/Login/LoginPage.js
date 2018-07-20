import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from './LoginFormContainer';
import css from './LoginPage.scss';

class LoginPage extends Component {
  render () {
    return (
      <div className={css.overlay}>
        <div className={css.content}>
          <div className={css.loginPage}>
            <LoginFormContainer />

            <div className={css.link}>
              Not a member? <Link to='/sign_up'> Sign Up </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
