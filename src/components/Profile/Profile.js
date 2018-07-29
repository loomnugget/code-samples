import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Notification from '../Notifications/Notification';
import css from './Profile.scss';

class Profile extends Component {
  render () {
    const { currentUser, isLoading, error, clearError } = this.props;
    if (!currentUser) return null;

    return (
      <div className={css.profile}>
        <Notification isLoading={isLoading} error={error} clearError={clearError}/>
        <h3>Profile</h3>
        <p>{`${currentUser.first_name} ${currentUser.last_name}`}</p>
        <p>{`${currentUser.email}`}</p>
      </div>
    );
  }
}

Profile.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  clearError: PropTypes.func.isRequired,
  currentUser: PropTypes.object.isRequired
};

export default Profile;
