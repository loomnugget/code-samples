import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { isAuthenticating, userAuthenticated, authError } from '../selectors/authSelectors';

export default function requiresAuth(Component) {

  class AuthWrapper extends React.Component {
    static propTypes= {
      history: PropTypes.object.isRequired,
      isAuthenticating: PropTypes.bool.isRequired,
      authenticated: PropTypes.bool.isRequired,
      authError: PropTypes.string
    };

    componentDidMount() {
      this.checkAndRedirect();
    }

    componentDidUpdate() {
      this.checkAndRedirect();
    }

    checkAndRedirect = () => {
      const { authenticated, isAuthenticating, history } = this.props;
      if (!isAuthenticating && !authenticated) history.replace('/login');
    }

    render() {
      const { authenticated, ...componentProps } = this.props;

      return (
        <div>
          {authenticated ? <Component {...componentProps} /> : null}
        </div>
      );
    }
  }

  const mapStateToProps = state => ({
    isAuthenticating: isAuthenticating(state),
    authenticated: userAuthenticated(state),
    authError: authError(state)
  });

  return connect(mapStateToProps)(AuthWrapper);
}
