import React, { Component } from 'react';
import LinkButton from '../Buttons/LinkButton';
import TestMap from '../Map/TestMap';
import css from './PublicHomePage.scss';

class PublicHomePage extends Component {
  render () {
    return (
      <div className={css.public}>
        <div className={css.row}>
          <h1 className={css.title}>
            Welcome! You don't need to be signed in to see this page.
          </h1>

          <LinkButton path='/login' text="Login" />
        </div>

        <div className={css.row}>
          <TestMap />
        </div>
      </div>
    );
  }
}

export default PublicHomePage;
