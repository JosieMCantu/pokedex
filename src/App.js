import React, { Component } from 'react'
import './App.css';
import ListPage from './components/ListPage.js';
import pokedata from './data.js';



export default class App extends Component {
  state = {
    attack: '',
    defense: '',
    hp: '',
  }
  render() {
    const filteredPoke = pokedata.filter((poke) => {
      if (!this.state.attack && !this.state.keyword)
        return true;
    });

    return (
      <>
        <div>
          <header>Hello!</header>
        </div>

        <div>
          <ListPage pokedata={filteredPoke} />
        </div>
      </>
    )
  }
}



