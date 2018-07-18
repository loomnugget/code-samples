import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './PublicHomePage.scss';

class PublicHomePage extends Component {
  render () {
    return (
      <div className={css.public}>
        <h1 className={css.title}>
          Welcome! You don't need to be signed in to see this page.
        </h1>
        <Link to='/login'> Login </Link>
      </div>
    );
  }
}

export default PublicHomePage;
