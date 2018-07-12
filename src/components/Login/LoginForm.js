import React, { Component } from 'react';
import { Field, propTypes as reduxFormPropTypes } from 'redux-form';
import PropTypes from 'prop-types';
import SaveButton from '../Buttons/SaveButton';
import FormField from '../Forms/FormField';
import FormNotification from '../Notifications/FormNotification';
import { required, validateEmail } from '../../validators';
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
          validate={required}
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
