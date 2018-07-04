import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { authenticateUser } from '../../actions/authActions';
import { userAuthenticated, authError } from '../../selectors/authSelectors';
import LoginForm from './LoginForm';

const form = 'Login';

const submit = (dispatch, router) => ({email, password}) => (
  dispatch(authenticateUser(email, password))
  .then(() => {
    router.push('/home');
  })
);

const mapStateToProps = state => ({
  authError: authError(state),
  userAuthenticated: userAuthenticated(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: submit(dispatch, ownProps.router)
});

const LoginFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
  reduxForm({ form })
)(LoginForm);

export default LoginFormContainer;
