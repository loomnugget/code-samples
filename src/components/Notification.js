import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Notification.scss';

class Notification extends Component {
  render () {
    const { error } = this.props;
    return (
      <div className={css.alert} role="alert">{error}</div>
    );
  }
}

Notification.propTypes = {
  error: PropTypes.string
};

export default Notification;
