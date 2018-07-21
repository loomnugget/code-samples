import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import downloads from './downloadsReducer';
import auth from './authReducer';
import users from './usersReducer';
import messages from './messagesReducer';
import websocket from './websocketReducer';

const rootReducer = combineReducers({
  downloads,
  auth,
  users,
  messages,
  websocket,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
