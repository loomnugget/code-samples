import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './MainNavigation.scss';

class MainNavigation extends Component {
  render () {
    return(
      <div className={css.mainNavigation}>
        <p className={css.item}> Code Samples </p>
        <Link className={css.item} to="/">Home</Link>
        <Link className={css.item} to="/word-problem">Word Problem</Link>
        <Link className={css.item} to="/api-middleware">API Middleware</Link>
      </div>
    );
  }
}


export default MainNavigation;
