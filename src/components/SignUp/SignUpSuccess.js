import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import css from './SignUpSuccess.scss';

class SignUpSuccess extends Component {
  render () {
    const { user } = this.props;
    if(!user) return null;

    return (
      <div className={css.signUpSuccess}>
        <h1>Success!</h1>
        <h2>Welcome {user.first_name} {user.last_name}</h2>
      </div>
    );
  }
}

SignUpSuccess.propTypes = {
  user: PropTypes.object.isRequired
};
export default SignUpSuccess;
