
import React, { Component } from 'react'
import SearchPage from './components/SearchPage.js';
import Header from './components/Header.js';

//create routing to home and search
export default class App extends Component {
  render() {
    return (
      <div>

        <SearchPage />
      </div>
    )
  }
}

