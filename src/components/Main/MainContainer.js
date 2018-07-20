import { connect } from 'react-redux';
import { logOutUser, clearAuthError } from '../../actions/authActions';
import { isAuthenticating, userAuthenticated, authError } from '../../selectors/authSelectors';
import Main from './Main';

const mapStateToProps = state => ({
  isAuthenticating: isAuthenticating(state),
  authenticated: userAuthenticated(state),
  authError: authError(state)
});

const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch(logOutUser()),
  clearError: () => dispatch(clearAuthError())
});

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
