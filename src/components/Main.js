import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import WordProblem from './WordProblem';
import MiddlewareTest from './MiddlewareTest';

class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/word-problem' component={WordProblem}/>
          <Route path='/api-middleware' component={MiddlewareTest}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
