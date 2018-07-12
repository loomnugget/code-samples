import { connect } from 'react-redux';

import { retrieveUsers } from '../../actions/userActions';
import { clearAPIError } from '../../actions/apiActions';
import TestApiCall from './TestApiCall';

const mapDispatchToProps = dispatch => ({
  retrieveUsers: () => dispatch(retrieveUsers()),
  clearError: () => dispatch(clearAPIError())
});

const mapStateToProps = state => ({
  error: state.api.error,
  isLoading: state.api.isLoading
});

const TestApiCallContainer = connect(mapStateToProps, mapDispatchToProps)(TestApiCall);

export default TestApiCallContainer;
