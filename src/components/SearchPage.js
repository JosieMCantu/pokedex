import React, { Component } from 'react'
import '../App.css';
import request from 'superagent';
import Spinner from './Spinner.js';
import DropDowns from './DropDowns.js';
import SearchBar from './SearchBar';
import PokeList from './PokeList.js';

export default class ListPage extends Component {
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: '',
        filter: '',
        loading: false,
        currentPage: 1,
        perPage: 10
    }
    componentDidMount = async () => {
        await this.fetchPokemon();
    }
    fetchPokemon = async () => {
        this.setState({ loading: true });
        const myData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&direction=${this.state.sortOrder}&sort=${this.state.sortBy}&page=${this.state.currentPage}&perPage=${this.state.perPage}`);
        this.setState({
            pokemon: myData.body.results,
            loading: false,
            totalPokemon: myData.body.count
        });
    }
    handleClick = async () => {
        await this.fetchPokemon();
    }
    handleFilterChange = (e) => {
        this.setState({ filter: e.target.value });
    }
    handleSortOrder = (e) => {
        this.setState({
            sortOrder: e.target.value
        });
    }
    handleSortBy = (e) => {
        this.setState({
            sortBy: e.target.value
        });
    }
    handlePerPage = (e) => {
        this.setState({
            perPage: e.target.value
        })
    }
    handleNextClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage + 1
        });
        await this.fetchPokemon()
    }
    handlePreviousClick = async () => {
        await this.setState({
            currentPage: this.state.currentPage - 1
        });
        await this.fetchPokemon()
    }
    render() {
        const lastPage = Math.ceil(this.state.totalPokemon / this.state.perPage)
        return (
            <>
                <div classname="display-container">
                    <DropDowns handleChange={this.handleSortOrder} currentValue={this.state.sortOrder} options={['Ascending', 'Descending']} />
                    <DropDowns handleChange={this.handleSortBy} currentValue={this.state.sortBy} options={['attack', 'defense', 'type_1', 'pokemon']} />
                    <SearchBar handleChange={this.handleFilterChange} onClick={this.handleClick} />

                    <h2>Page {this.state.currentPage}</h2>
                    <label>
                        Results per page:
                        <select onChange={this.handlePerPage}>
                            <option value={10}>10</option>
                            <option value={50}>50</option>
                            <option value={75}>75</option>
                            <option value={100}>100</option>
                        </select>
                    </label>
                    <button onClick={this.handlePreviousClick} disabled={this.state.currentPage === 1}>Previous</button>
                    <button onClick={this.handleNextClick} disabled={this.state.currentPage === lastPage}>Next</button>

                    {
                        this.state.loading
                            ? <Spinner />
                            :
                            <PokeList myData={this.state.pokemon} />
                    }
                </div>
            </>
        )

    }
}