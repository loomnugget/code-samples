import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import api from './apiReducer';
import downloads from './downloadsReducer';
import auth from './authReducer';
import clients from './clientsReducer';
import users from './usersReducer';

const rootReducer = combineReducers({
  api,
  downloads,
  auth,
  clients,
  users,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
