import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import SignUpSuccessContainer from './SignUpSuccessContainer';
import css from './SignUpSuccess.scss';

class SignUpSuccessPage extends Component {
  render () {
    const {match: {params: {user_id}}} = this.props;
    return (
      <div className={css.overlay}>
        <div className={css.content}>

          <div className={css.signUpSuccess}>
            <SignUpSuccessContainer
              userId={Number(user_id)}
            />
          </div>
          
        </div>
      </div>
    );
  }
}

SignUpSuccessPage.propTypes = {
  match: PropTypes.object.isRequired
};

export default SignUpSuccessPage;
