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
          label="First Name"
          type="text"
          component={FormField}
          validate={required}
        />

        <Field
          name="last_name"
          label="Last Name"
          type="text"
          component={FormField}
          validate={required}
        />

        <Field
          name="email"
          label="Email"
          type="email"
          component={FormField}
          validate={[required, validateEmail]}
        />

        <Field
          name="password"
          label="Password"
          type="password"
          component={FormField}
        />

        <Field
          name="password_confirmation"
          label="Confirm Password"
          type="password"
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
