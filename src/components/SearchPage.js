import React, { Component } from 'react'
import '../App.css';
import request from 'superagent';
import Spinner from './Spinner.js';

export default class ListPage extends Component {
    state = {
        pokemon: [],
        filter: '',
        loading: false,
    }
    componentDidMount = async () => {
        await this.fetchPokemon();
    }
    fetchPokemon = async () => {
        const myData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.filter}`);
        this.setState({ loading: true });
        this.setState({ pokemon: myData.body.results });
        this.setState({ loading: false });
    }
    handleClick = async () => {
        await this.fetchPokemon();
    }
    handleFilterChange = async (e) => {
        this.setState({ filter: e.target.value });
    }


    render() {

        return (
            <>
                <label>
                    <input onChange={this.handleFilterChange} />
                </label>
                <button onClick={this.handleClick}>Search</button>
                <div>
                    {
                        this.state.loading
                            ? <Spinner />
                            : this.state.pokemon.map(poke =>
                                <div key={poke.pokemon}>
                                    <div>
                                        <img src={poke.url_image} alt="poke" />
                                    </div>
                                    {poke.pokemon} : {poke.type_1}
                                </div>)}
                </div>
            </>
        )

    }
}