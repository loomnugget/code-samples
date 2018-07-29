import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Notification from '../Notifications/Notification';
import PrimaryButton from '../Buttons/PrimaryButton';
import css from './Downloads.scss';

class Downloads extends Component {
  static propTypes = {
    error: PropTypes.string,
    isLoading: PropTypes.bool.isRequired,
    clearError: PropTypes.func.isRequired,
    downloadCSV: PropTypes.func.isRequired,
    downloadPDF: PropTypes.func.isRequired
  };

  handleDownloadCSV = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.downloadCSV();
  }

  handleDownloadPDF = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.downloadPDF();
  }

  render () {
    const { isLoading, error, clearError } = this.props;

    return (
      <div className={css.downloads}>
        <Notification isLoading={isLoading} error={error} clearError={clearError}/>
        <div className={css.btnContainer}>
          <div className={css.btn}>
            <PrimaryButton
              disabled={isLoading}
              text="Test CSV Download"
              onClick={this.handleDownloadCSV}

            />
          </div>
          <div className={css.btn}>
            <PrimaryButton
              disabled={isLoading}
              text="Test PDF Download"
              onClick={this.handleDownloadPDF}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Downloads;
