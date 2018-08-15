import React, { Component } from 'react';
import DownloadsContainer from './DownloadsContainer';
// import css from './Downloads.scss';

class DownloadsPage extends Component {
  render () {
    return(
      <div>
        <h1 className="title"> Downloads </h1>
        <p> Test downloading CSVs and PDFs. </p>
        <DownloadsContainer />
      </div>
    );
  }
}

export default DownloadsPage;
