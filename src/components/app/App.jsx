import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CocktailPage from '../../containers/CocktailPage';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(routerProps) => <CocktailPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
