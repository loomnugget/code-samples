import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import actionCable from '../../cable';
import Notification from '../Notifications/Notification';
import PrimaryButton from '../Buttons/PrimaryButton';

class TestApiCall extends Component {
  constructor() {
    super();
    this.cable = new actionCable();

  }
  handleCallApi = () => {
    const { retrieveUsers } = this.props;
    retrieveUsers()
    .then(() => {})
    .catch(() => {});
  }

  handleTestCable = () => {
    console.log('cable', this.cable)
  }

  render () {
    const { isLoading, error, clearError } = this.props;
    return (
      <div>
        <Notification isLoading={isLoading} error={error} clearError={clearError}/>

        <PrimaryButton
          color="blue"
          disabled={isLoading}
          text="Test Api Call"
          onClick={() => this.handleCallApi()}
        />

        <PrimaryButton text="Test Action Cable" onClick={() => this.handleTestCable()}/>
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
