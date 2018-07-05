import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './FormField.scss';

class FormField extends Component {
  static propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    input: PropTypes.object.isRequired,
    meta: PropTypes.object.isRequired
  };

  render() {
    const { input, placeholder, label, meta: { touched, error } } = this.props;
    const hasError = touched && error;
    const labelClass = hasError ? `${css.label} ${css.errorLabel}` : css.label;

    return (
      <div className={css.formGroup}>
        {label && <label className={labelClass}> {label} </label>}
        <input className={`${css.input} ${hasError ? css.errorInput : ''}`} {...input} placeholder={placeholder}/>
        {hasError && <div className={css.fieldError}><strong>{error}</strong></div>}
      </div>
    );
  }
}

export default FormField;
