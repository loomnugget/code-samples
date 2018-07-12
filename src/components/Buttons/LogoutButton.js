import React from 'react';
import { PropTypes } from 'prop-types';
import css from './LogoutButton.scss';

const LogoutButton = ({ text, onClick, disabled }) => {
  return (
    <button className={css.logoutBtn} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

LogoutButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default LogoutButton;
