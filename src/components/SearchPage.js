import React, { Component } from 'react'
import '../App.css';
import request from 'superagent';
import Spinner from './Spinner.js';
import DropDowns from './DropDowns.js';

export default class ListPage extends Component {
    state = {
        pokemon: [],
        sortOrder: '',
        sortBy: '',
        filter: '',
        loading: false,
    }
    componentDidMount = async () => {
        await this.fetchPokemon();
    }
    fetchPokemon = async () => {
        this.setState({ loading: true });
        const myData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}&direction=${this.state.sortOrder}&sort=${this.state.sortBy}`);
        this.setState({ pokemon: myData.body.results, loading: false });
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
    render() {

        return (
            <>
                <label>
                    <input onChange={this.handleFilterChange} />
                </label>
                <button onClick={this.handleClick}>Search</button>
                <div>
                    <DropDowns handleChange={this.handleSortOrder} currentValue={this.state.sortOrder} options={['Ascending', 'Descending']} />
                    <DropDowns handleChange={this.handleSortBy} currentValue={this.state.sortBy} options={['attack', 'defense', 'type_1', 'pokemon']} />
                    {
                        this.state.loading
                            ? <Spinner />
                            : this.state.pokemon.map(poke =>
                                <div key={poke.pokemon}>
                                    <div>
                                        <img src={poke.url_image} alt="poke" />
                                        <p>Name: {poke.pokemon}</p>
                                        <p>Type: {poke.type_1}</p>
                                        <p>Attack: {poke.attack}</p>
                                        <p>Defense: {poke.defense}</p>
                                    </div>

                                </div>)}
                </div>
            </>
        )

    }
}