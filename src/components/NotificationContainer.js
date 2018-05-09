import { connect } from 'react-redux';

import { clearErrorMessage } from '../actions/csvActions';
import Notification from './Notification';

const mapDispatchToProps = dispatch => ({
  clearError: () => dispatch(clearErrorMessage())
});

const mapStateToProps = state => ({
  isLoading: state.downloads.isLoading,
  error: state.downloads.error
});

const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notification);

export default NotificationContainer;
