import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { authenticateUser } from '../../actions/authActions';
import { userAuthenticated, authError } from '../../selectors/authSelectors';
import LoginForm from './LoginForm';

const form = 'Login';

const submit = (dispatch, history) => ({email, password}) => (
  dispatch(authenticateUser(email, password))
  .then(() => history.push('/main/home'))
);

const mapStateToProps = state => ({
  authError: authError(state),
  userAuthenticated: userAuthenticated(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: submit(dispatch, ownProps.history)
});

const LoginFormContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
  reduxForm({ form })
)(LoginForm);

export default LoginFormContainer;
