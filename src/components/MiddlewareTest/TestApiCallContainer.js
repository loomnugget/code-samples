import { connect } from 'react-redux';
import { userError, isLoading, getUsers } from '../../selectors/userSelectors';
import { retrieveUsers, clearUserError } from '../../actions/userActions';
import TestApiCall from './TestApiCall';

const mapDispatchToProps = dispatch => ({
  retrieveUsers: () => dispatch(retrieveUsers()),
  clearError: () => dispatch(clearUserError())
});

const mapStateToProps = state => ({
  error: userError(state),
  isLoading: isLoading(state),
  users: getUsers(state)
});

const TestApiCallContainer = connect(mapStateToProps, mapDispatchToProps)(TestApiCall);

export default TestApiCallContainer;
