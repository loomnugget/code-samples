import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
// import PropTypes from 'prop-types';
import SaveButton from '../Buttons/SaveButton';
import FormNotification from '../Notifications/FormNotification';

import css from './SignUpForm.scss';

class SignUpForm extends Component {
  render () {
    const { error, submitting, submitFailed, handleSubmit } = this.props;
    const errorMessage = (submitFailed && error);

    return(
      <div className={css.signUp}>
        <form className={css.signUpForm} onSubmit={handleSubmit}>
          <Field
            name="first_name"
            type="text"
            placeholder="First Name"
            autoComplete="off"
            component="input"
            className={css.input}
          />

          <Field
            name="last_name"
            type="text"
            placeholder="Last Name"
            autoComplete="off"
            component="input"
            className={css.input}
          />

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

          <Field
            name="password_confirmation"
            type="password"
            placeholder="Confirm Password"
            autoComplete="off"
            component="input"
            className={css.input}
          />

          {errorMessage && <FormNotification error={errorMessage} />}

          <SaveButton text="Sign Up" disabled={submitting}/>
        </form>
      </div>
    );
  }
}

SignUpForm.propTypes = {
  ...reduxFormPropTypes
};

export default SignUpForm;
