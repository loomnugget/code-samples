import React, { Component } from 'react';
import DownloadCSVContainer from './DownloadCSVContainer';
import TestApiCallContainer from './TestApiCallContainer';
import css from './MiddlewareTest.scss';

class MiddlewareTest extends Component {
  render () {
    return(
      <div className={css.middlewareTest}>
        <h3>MiddlewareTest</h3>
        <div className={css.btnContainer}>
          <div className={css.btn}>
            <DownloadCSVContainer />
          </div>
          <div className={css.btn}>
            <TestApiCallContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default MiddlewareTest;
