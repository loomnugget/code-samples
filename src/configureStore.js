import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import csv from './middlewares/csv';
import api from './middlewares/api';
import websocket from './middlewares/websocket';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState, composeWithDevTools(
    applyMiddleware(thunk, api, csv, websocket))
  );
}
