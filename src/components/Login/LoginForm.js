import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import PropTypes from 'prop-types';
import SaveButton from '../Buttons/SaveButton';
import FormNotification from '../Notifications/FormNotification';
import css from './LoginForm.scss';

class LoginForm extends Component {
  render () {
    const { error, submitting, submitFailed, handleSubmit } = this.props;
    const { authError } = this.props;
    const errorMessage = (submitFailed && error) || authError;

    return (
      <form className={css.loginForm} onSubmit={handleSubmit}>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
          component="input"
          className={css.input}
        />

        <Field
          name="password"
          type="password"
          placeholder="Password"
          autoComplete="off"
          component="input"
          className={css.input}
        />

        {errorMessage && <FormNotification error={errorMessage} />}

        <SaveButton text="Log In" disabled={submitting}/>
      </form>
    );
  }
}

LoginForm.propTypes = {
  ...reduxFormPropTypes,
  userAuthenticated: PropTypes.bool
};

export default LoginForm;
