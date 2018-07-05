import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import SaveButton from '../Buttons/SaveButton';
import FormField from '../Forms/FormField';
import FormNotification from '../Notifications/FormNotification';
import { required, validateEmail } from '../../validators';
import css from './SignUpForm.scss';

class SignUpForm extends Component {
  render () {
    const { error, userError, submitting, submitFailed, handleSubmit } = this.props;
    const errorMessage = (submitFailed && error) || userError;

    return (
      <form className={css.signUpForm} onSubmit={handleSubmit}>
        <Field
          name="first_name"
          type="text"
          placeholder="First Name"
          component={FormField}
          validate={required}
        />

        <Field
          name="last_name"
          type="text"
          placeholder="Last Name"
          component={FormField}
          validate={required}
        />

        <Field
          name="email"
          type="email"
          placeholder="Email"
          component={FormField}
          validate={validateEmail}
        />

        <Field
          name="password"
          type="password"
          placeholder="Password"
          component={FormField}
        />

        <Field
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          component={FormField}
        />

        {errorMessage && <FormNotification error={errorMessage} />}

        <SaveButton text="Sign Up" disabled={submitting}/>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  ...reduxFormPropTypes
};

export default SignUpForm;
