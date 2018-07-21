import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Notification from '../Notifications/Notification';
import PrimaryButton from '../Buttons/PrimaryButton';

class TestApiCall extends Component {
  render () {
    const { retrieveUsers, isLoading, error, clearError } = this.props;
    
    return (
      <div>
        <Notification isLoading={isLoading} error={error} clearError={clearError}/>

        <PrimaryButton
          color="blue"
          disabled={isLoading}
          text="Test Api Call"
          onClick={() => retrieveUsers()}
        />

      </div>
    );
  }
}

TestApiCall.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  clearError: PropTypes.func.isRequired,
  retrieveUsers: PropTypes.func.isRequired
};

export default TestApiCall;
