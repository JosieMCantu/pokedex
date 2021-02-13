import React, { Component } from 'react'
import '../App.css';
import pokedata from '../data.js';
import DropDowns from './DropDowns.js';
import PokeList from './PokeList.js';
import SearchBar from './SearchBar.js';

export default class ListPage extends Component {
    state = {
        pokemon: pokedata,
        sortOrder: 'Ascend',
        sortBy: 'pokemon',
        filter: ''
    }
    handleFilterChange = (e) => {
        this.setState({
            filter: e.target.value
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
        if (this.state.sortBy) {
            if (typeof (pokedata[0][this.state.sortBy]) === 'number') {
                if (this.state.sortOrder === 'Ascend') {
                    this.state.pokemon.sort((a, b) => a[this.state.sortBy] - (b[this.state.sortBy]))
                } else {
                    this.state.pokemon.sort((a, b) => b[this.state.sortBy] - (a[this.state.sortBy]))
                };
            }
        }

        if (this.state.sortBy) {
            if (typeof (pokedata[0][this.state.sortBy]) !== 'number') {
                if (this.state.sortOrder === 'Ascend') {
                    this.state.pokemon.sort((a, b) => a[this.state.sortBy].localeCompare(b[this.state.sortBy]))
                } else {
                    this.state.pokemon.sort((a, b) => b[this.state.sortBy].localeCompare(a[this.state.sortBy]))
                };
            }
        }

        const filteredPokemon = pokedata.filter(poke =>
            poke.pokemon.includes(this.state.filter));
        console.log(filteredPokemon);
        return (
            <>
                <DropDowns handleChange={this.handleSortOrderChange} currentValue={this.state.sortOrder} options={['Ascending', 'Descending']} />

                <DropDowns handleChange={this.handleSortByChange} currentValue={this.state.sortBy} options={['attack', 'defense', 'type_1', 'pokemon']} />

                <SearchBar handleChange={this.handleFilterChange} currentValue={this.state.filter} options={this.state.filter} />

                <PokeList pokedata={filteredPokemon} />
            </>
        )

    }
}