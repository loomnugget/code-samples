import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './Notification.scss';

class Notification extends Component {
  handleClearError = () => this.props.clearError();

  render () {
    const { error, isLoading } = this.props;
    if (isLoading) {
      return (
        <div className={`${css.alert} ${css.loading}`} role="alert">
          <div className={css.text}>Loading...</div>
        </div>
      );
    } else if (error) {
      return (
        <div className={`${css.alert} ${css.error}`} role="alert">
          <div className={css.iconContainer} onClick={this.handleClearError} >
            <span className={`fa fa-close ${css.icon}`}/>
          </div>
          <div className={css.text}>{error}</div>
        </div>
      );
    } else return null;
  }
}

Notification.propTypes = {
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  clearError: PropTypes.func
};

export default Notification;
