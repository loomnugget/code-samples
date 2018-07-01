import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Notification from '../Notifications/Notification';
import PrimaryButton from '../Buttons/PrimaryButton';

class DownloadCSV extends Component {
  handleDownload = () => {
    const { downloadCSV } = this.props;
    downloadCSV()
    .then(() => {})
    .catch(() => {});
  }

  render () {
    const { isLoading, error, clearError } = this.props;
    return(
      <div>
        <Notification isLoading={isLoading} error={error} clearError={clearError}/>
        <PrimaryButton
          disabled={isLoading}
          text="Test CSV Download"
          onClick={() => this.handleDownload()}
        />
      </div>
    );
  }
}

DownloadCSV.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  clearError: PropTypes.func.isRequired,
  downloadCSV: PropTypes.func.isRequired
};

export default DownloadCSV;
