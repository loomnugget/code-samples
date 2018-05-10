import { connect } from 'react-redux';

import { downloadTestCSV, clearErrorMessage } from '../actions/csvActions';
import DownloadCSV from './DownloadCSV';

const mapDispatchToProps = dispatch => ({
  downloadCSV: () => dispatch(downloadTestCSV()),
  clearError: () => dispatch(clearErrorMessage())
});

const mapStateToProps = state => ({
  error: state.downloads.error,
  isLoading: state.downloads.isLoading
});

const DownloadCSVContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadCSV);

export default DownloadCSVContainer;
