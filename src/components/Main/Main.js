import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import { removeAuthHeaders } from '../../auth';
import LogoutButton from '../Buttons/LogoutButton';
import DownloadsPage from '../Downloads/DownloadsPage';
import Home from '../Home';
import ChatContainer from '../Chat/ChatContainer';
import ProfileContainer from '../Profile/ProfileContainer';
import css from './Main.scss';

class Main extends Component {
  static propTypes = {
    logOut: PropTypes.func.isRequired,
    isAuthenticating: PropTypes.bool.isRequired,
    authenticated: PropTypes.bool.isRequired,
    clearError: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentWillMount() {
    const { authenticated, history } = this.props;
    if (!authenticated) history.push('/login');
  }

  componentWillReceiveProps(nextProps) {
    if(!nextProps.authenticated) {
      console.log('not authenticated');
      history.push('/login');
    }
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
    const { match, isAuthenticating } = this.props;

    return (
      <div className={css.main}>
        <div className={css.mainNavigation}>
          <NavLink className={css.item} activeClassName={css.active} to={`${match.url}/home`}>Home</NavLink>
          <NavLink className={css.item} activeClassName={css.active} to={`${match.url}/profile`}>Profile</NavLink>
          <NavLink className={css.item} activeClassName={css.active} to={`${match.url}/downloads`}>Downloads</NavLink>
          <NavLink className={css.item} activeClassName={css.active} to={`${match.url}/chat`}> Chat </NavLink>
          <div className={css.btn}>
            <LogoutButton
              text="Logout"
              disabled={isAuthenticating}
              onClick={this.handleLogout}
            />
          </div>
        </div>

        <Route path={`${match.url}/home`} component={Home}/>
        <Route path={`${match.url}/profile`} component={ProfileContainer}/>
        <Route path={`${match.url}/downloads`} component={DownloadsPage}/>
        <Route path={`${match.url}/chat`} component={ChatContainer}/>
      </div>
    );
  }
}

export default Main;
