import React from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import css from './LinkButton.scss';

const LinkButton = ({ text, path }) => {
  return (
    <Link className={css.linkBtn} to={path}>
      {text}
    </Link>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};

export default LinkButton;
