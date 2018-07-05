import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FormField.scss';

class FormField extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired
  };

  render() {
    const { input, label, meta: { touched, error } } = this.props;
    const hasError = touched && error;
    const labelClass = hasError ? `${css.label} ${css.errorLabel}` : css.label;

    return (
      <div className={css.formGroup}>
        <label className={labelClass}>
          {label}
          {hasError && <strong><span className={css.fieldError}>{error}</span></strong>}
        </label>

        <input {...input} className={`${css.input} ${hasError ? css.errorInput : ''}`}
        />
      </div>
    );
  }
}

export default FormField;
