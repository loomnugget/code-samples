import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk'; //async action creators
import api from './middlewares/api';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(api));
}
