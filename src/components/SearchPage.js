import React, { Component } from 'react'
import Header from '../components/Header.js';
import pokedata from '../data.js';
import DropDowns from './DropDowns.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';

export default class ListPage extends Component {
    state = {
        pokemon: pokedata,
        sortorder: 'Ascend',
        sortBy: 'pokemon',
        filter: ''
    }
    handleFilterChange = (e) => {
        this.setState({
            input: e.target.value
        })
    }
    handleSortOrderChange = (e) => {
        this.setState({
            sortOrder: e.target.value,
        });
    }
    handleSortByChange = (e) => {
        this.setState({
            sortBy: e.target.value,
        })
    }


    render() {
        if (this.state.sortBy !== '') {

            if (this.state.sortOrder === 'Ascend') {
                this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
            } else {
                this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
            }
        }
        const filteredPokemon = pokedata.filter(poke =>
            poke.pokemon.includes(this.state.filter))

        return (
            <>
                <Header />
                <DropDowns />
                <DropDowns />
                <SearchBar />
                <PokeList pokedata={filteredPokemon} />
            </>
        )
    }
}



