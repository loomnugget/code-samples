import { connect } from 'react-redux';

import { testCallApi, clearAPIError } from '../actions/apiActions';
import TestApiCall from './TestApiCall';

const mapDispatchToProps = dispatch => ({
  callApi: () => dispatch(testCallApi()),
  clearError: () => dispatch(clearAPIError())
});

const mapStateToProps = state => ({
  error: state.api.error,
  isLoading: state.api.isLoading
});

const TestApiCallContainer = connect(mapStateToProps, mapDispatchToProps)(TestApiCall);

export default TestApiCallContainer;
