import { connect } from 'react-redux';
import { downloadTestCSV, downloadTestPDF, clearErrorMessage } from '../../actions/downloadActions';
import Downloads from './Downloads';

const mapDispatchToProps = dispatch => ({
  downloadCSV: () => dispatch(downloadTestCSV()),
  downloadPDF: () => dispatch(downloadTestPDF()),
  clearError: () => dispatch(clearErrorMessage())
});

const mapStateToProps = state => ({
  error: state.downloads.error,
  isLoading: state.downloads.isLoading
});

const DownloadsContainer = connect(mapStateToProps, mapDispatchToProps)(Downloads);

export default DownloadsContainer;
