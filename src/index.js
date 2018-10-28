import 'babel-polyfill';
require('whatwg-fetch');
// require('core-js/es6/map');
// require('core-js/es6/set');
// require('core-js/es6/string');
// require('core-js/es6/array');
// require('core-js/es6/object');

import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import App from './components/App';
import configureStore from './configureStore';

require('./assets/stylesheets/_styles.scss');

export const store = configureStore();

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById('app')
);

registerServiceWorker();  // Runs register() as default function
