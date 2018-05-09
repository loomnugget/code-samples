import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import PrimaryButton from './PrimaryButton';

class DownloadCSV extends Component {
  handleDownload = () => {
    const { downloadCSV } = this.props;
    downloadCSV();
  }

  render () {
    const { isLoading } = this.props;
    return(
      <div>
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
  isLoading: PropTypes.bool.isRequired,
  downloadCSV: PropTypes.func.isRequired
};

export default DownloadCSV;
