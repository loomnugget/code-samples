import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';
import { signUpUser } from '../../actions/authActions';

import SignUpForm from './SignUpForm';

const form = 'SignUpForm';

const submit = dispatch => (values, router) => (
  dispatch(signUpUser(values))
  .then(user => router.push(`/sign_up/${user.id}/success`))
);


const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: submit(dispatch, ownProps.router)
});

const SignUpFormContainer = compose(
  withRouter,
  connect(null, mapDispatchToProps),
  reduxForm({ form })
)(SignUpForm);

export default SignUpFormContainer;
