import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Test from './Test';
import Home from './Home';

class Main extends Component {
  render () {
    return(
      <div>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/test' component={Test}/>
        </Switch>
      </div>
    );
  }
}

export default Main;
