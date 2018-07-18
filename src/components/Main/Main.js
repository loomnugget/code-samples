import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Link } from 'react-router-dom';
import LogoutButton from '../Buttons/LogoutButton';
import MiddlewareTest from '../MiddlewareTest/MiddlewareTest';
import Home from '../Home';
import Chat from '../Chat/Chat';
import css from './Main.scss';

class Main extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    authenticated: PropTypes.bool.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { authenticated, history } = this.props;
    if(!authenticated) {
      history.push('/login'); // Redirect to login page
    }
  }

  handleLogout = () => {
    const { logOut, history } = this.props;
    logOut().then(() => {
      history.push('/login'); // Redirect to login page
    });
  }

  render () {
    const { match } = this.props;
    
    return (
      <div className={css.main}>
        <div className={css.mainNavigation}>
          <p className={css.item}> Navigation </p>
          <Link className={css.item} to={`${match.url}/home`}>Home</Link>
          <Link className={css.item} to={`${match.url}/api-middleware`}>API Middleware</Link>
          <Link className={css.item} to={`${match.url}/chat`}> Chat </Link>
          <div className={css.btn}>
            <LogoutButton text="Logout" onClick={() => this.handleLogout()}/>
          </div>
        </div>

        <Route path={`${match.url}/home`} component={Home}/>
        <Route path={`${match.url}/api-middleware`} component={MiddlewareTest}/>
        <Route path={`${match.url}/chat`} component={Chat}/>
      </div>
    );
  }
}

export default Main;
