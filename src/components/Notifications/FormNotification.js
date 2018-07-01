import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Notification.scss';

class FormNotification extends Component {
  render () {
    const { error } = this.props;

    return (
      <div className={`${css.alert} ${css.error}`} role="alert">
        <div className={css.text}>{error}</div>
      </div>
    );

  }
}

FormNotification.propTypes = {
  error: PropTypes.string
};

export default FormNotification;
