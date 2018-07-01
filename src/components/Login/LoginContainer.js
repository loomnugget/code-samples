import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { authenticateUser } from '../../actions/authActions';
import { userAuthenticated, authError } from '../../selectors/authSelectors';
import Login from './Login';

const form = 'Login';

const submit = dispatch => ({email, password}) => (
  dispatch(authenticateUser(email, password))
  .then(() => {

  })
);

const mapStateToProps = state => ({
  authError: authError(state),
  userAuthenticated: userAuthenticated(state)
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: submit(dispatch)
});

const LoginContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
  reduxForm({ form })
)(Login);

export default LoginContainer;
