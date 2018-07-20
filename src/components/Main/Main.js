import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import { removeAuthHeaders } from '../../auth';
import Notification from '../Notifications/Notification';
import LogoutButton from '../Buttons/LogoutButton';
import MiddlewareTest from '../MiddlewareTest/MiddlewareTest';
import Home from '../Home';
import ChatContainer from '../Chat/ChatContainer';
import css from './Main.scss';

class Main extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    authError: PropTypes.string,
    clearError: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { authenticated, history } = this.props;
    if (!authenticated) history.push('/login');
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.authenticated) history.push('/login');
  }

  handleLogout = (e) => {
    const { logOut, history } = this.props;

    e.preventDefault();
    e.stopPropagation();

    logOut().then(() => {
      removeAuthHeaders();
      history.push('/login');
    });
  }

  render () {
    const { match, isAuthenticating, authenticated, authError, clearError } = this.props;

    return (
      <div className={css.main}>
        <div className={css.mainNavigation}>
          <p className={css.item}> Navigation </p>
          <Link className={css.item} to={`${match.url}/home`}>Home</Link>
          <Link className={css.item} to={`${match.url}/api-middleware`}>API Middleware</Link>
          <Link className={css.item} to={`${match.url}/chat`}> Chat </Link>
          <div className={css.btn}>
            <LogoutButton
              text="Logout"
              disabled={isAuthenticating || !authenticated}
              onClick={this.handleLogout}
            />
          </div>
        </div>

        <Notification isLoading={isAuthenticating} error={authError} clearError={clearError}/>

        <Route path={`${match.url}/home`} component={Home}/>
        <Route path={`${match.url}/api-middleware`} component={MiddlewareTest}/>
        <Route path={`${match.url}/chat`} component={ChatContainer}/>
      </div>
    );
  }
}

export default Main;
