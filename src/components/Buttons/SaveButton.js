import React from 'react';
import { PropTypes } from 'prop-types';
import css from './SaveButton.scss';

const SaveButton = ({ text, disabled }) => {
  return (
    <button className={css.saveBtn} type="submit" role="submit" disabled={disabled}>
      {text}
    </button>
  );
};

SaveButton.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired
};

export default SaveButton;
