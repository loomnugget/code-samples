import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { reduxForm } from 'redux-form';

import { removeAuthHeaders } from '../../session';
import { authenticateUser } from '../../actions/authActions';
import { userAuthenticated } from '../../selectors/authSelectors';
import Login from './Login';

const form = 'Login';

const submit = dispatch => ({email, password}) => (
  dispatch(authenticateUser(email, password))
);

const navigateToPinAccess = props => () => props.router.push('/pin_access');

const mapStateToProps = state => ({
  userAuthenticated: userAuthenticated(state)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onSubmit: submit(dispatch),
  onSubmitFail: removeAuthHeaders,
  onSubmitSuccess: navigateToPinAccess(ownProps)
});

const LoginContainer = compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps ),
  reduxForm({ form })
)(Login);

export default LoginContainer;
