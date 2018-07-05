import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { signUpUser } from '../../actions/userActions';
import { userError } from '../../selectors/userSelectors';

import SignUpForm from './SignUpForm';
const form = 'SignUpForm';

const validate = values => {
  const errors = {};
  // Password length is configured with devise on backend
  const isCorrectLength = values.password ? values.password.length >= 6 : false;
  const valuesPresent = values.password && values.password_confirmation;
  const passwordsMatch = values.password === values.password_confirmation;

  if (!valuesPresent) errors._error = 'Password and password confirmation are required.';
  if (valuesPresent && !passwordsMatch) errors._error = 'Passwords must match.';
  if (valuesPresent && passwordsMatch && !isCorrectLength) errors._error = 'Password must be 6 characters or greater.';

  return errors;
};

const submit = dispatch => (values, router) => (
  dispatch(signUpUser(values))
  .then(user => router.push(`/sign_up/${user.id}/success`))
);

const mapStateToProps = (state) => ({
  userError: userError(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: submit(dispatch, ownProps.router)
});

const SignUpFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form, validate })
)(SignUpForm);

export default SignUpFormContainer;
