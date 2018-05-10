import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import api from './apiReducer';
import downloads from './downloadsReducer';
import clients from './clientsReducer';

const rootReducer = combineReducers({
  api,
  downloads,
  clients,
  routing: routerReducer
});

export default rootReducer;
