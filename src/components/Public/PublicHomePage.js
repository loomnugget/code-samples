import React, { Component } from 'react';
import LinkButton from '../Buttons/LinkButton';
import css from './PublicHomePage.scss';

class PublicHomePage extends Component {
  render () {
    return (
      <div className={css.public}>
        <h1 className={css.title}>
          Welcome! You don't need to be signed in to see this page.
        </h1>
        <LinkButton path='/login' text="Login" />
      </div>
    );
  }
}

export default PublicHomePage;
