import { connect } from 'react-redux';

import { downloadTestCSV } from '../actions/csvActions';
import DownloadCSV from './DownloadCSV';

const mapDispatchToProps = dispatch => ({
  downloadCSV: () => dispatch(downloadTestCSV())
});

const mapStateToProps = state => ({
  error: state.downloads.error,
  isLoading: state.downloads.isLoading
});

const DownloadCSVContainer = connect(mapStateToProps, mapDispatchToProps)(DownloadCSV);

export default DownloadCSVContainer;
