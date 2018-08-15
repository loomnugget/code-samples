import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import css from './GridNav.scss';

class GridNav extends Component {
  render () {
    return (
      <div className={css.gridNav}>
        <div className={css.row}>
          <Link className={css.item} to="/downloads">
            Test
          </Link>
        </div>
      </div>
    );
  }
}

export default GridNav;
