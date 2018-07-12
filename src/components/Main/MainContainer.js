import { connect } from 'react-redux';
import { logOutUser } from '../../actions/authActions';
import { userAuthenticated } from '../../selectors/authSelectors';
import Main from './Main';

const mapStateToProps = state => {
  return {
    authenticated: userAuthenticated(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch(logOutUser())
  };
};

const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);

export default MainContainer;
