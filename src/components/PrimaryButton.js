import React from 'react';
import { PropTypes } from 'prop-types';
import css from './PrimaryButton.scss';

const PrimaryButton = ({ text, onClick, disabled }) => {
  return (
    <button className={css.btn} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PrimaryButton;
