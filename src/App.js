
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './components/Header.js';
import SearchPage from './components/SearchPage.js';
import HomePage from './components/HomePage.js';
import DetailPage from './components/DetailPage.js';
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <HomePage {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <Route
              path="/:pokemonName"
              exact
              component={DetailPage}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}

