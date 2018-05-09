import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import downloads from './downloadsReducer';

const rootReducer = combineReducers({
  downloads,
  routing: routerReducer
});

export default rootReducer;
