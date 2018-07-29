import React, { Component } from 'react';
import DownloadsContainer from './DownloadsContainer';
// import css from './Downloads.scss';

class DownloadsPage extends Component {
  render () {
    return(
      <div>
        <h3> Download CSV </h3>
        <DownloadsContainer />
      </div>
    );
  }
}

export default DownloadsPage;
