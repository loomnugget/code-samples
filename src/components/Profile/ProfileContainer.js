import { connect } from 'react-redux';
import { getCurrentUser } from '../../selectors/authSelectors';
import { userError, isLoading } from '../../selectors/userSelectors';
import { clearUserError } from '../../actions/userActions';
import Profile from './Profile';

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearUserError())
});

const mapStateToProps = state => ({
  error: userError(state),
  isLoading: isLoading(state),
  currentUser: getCurrentUser(state)
});

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile);

export default ProfileContainer;
