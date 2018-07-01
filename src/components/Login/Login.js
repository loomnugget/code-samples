import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import PropTypes from 'prop-types';
import SaveButton from '../Buttons/SaveButton';
import FormNotification from '../Notifications/FormNotification';

import css from './Login.scss';

class Login extends Component {
  render () {
    // const { userAuthenticated } = this.props;
    const { error, submitting, submitFailed } = this.props;

    return(
      <div className={css.login}>
        <form className={css.loginForm}>

          <div className={css.formGroup}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={css.input}
              autoComplete="off"
              component="input"
            />
          </div>

          <div className={css.formGroup}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={css.input}
              autoComplete="off"
              component="input"
            />
          </div>

          {submitFailed && error && <FormNotification error={error} />}

          <SaveButton text="Log In" disabled={submitting}/>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  ...reduxFormPropTypes,
  userAuthenticated: PropTypes.bool
};

export default Login;
