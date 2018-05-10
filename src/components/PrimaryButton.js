import React from 'react';
import { PropTypes } from 'prop-types';
import css from './PrimaryButton.scss';

const PrimaryButton = ({ text, onClick, disabled, color }) => {
  const btnColor = color === 'blue' ? css.blue : '';

  return (
    <button className={`${css.btn} ${btnColor}`} disabled={disabled} onClick={onClick}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  color: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default PrimaryButton;
