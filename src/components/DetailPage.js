import React, { Component } from 'react'
import Spinner from './Spinner.js';
import request from 'superagent';



export default class DetailPage extends Component {
    state = {
        pokemonData: [],
        loading: false
    }
    componentDidMount = async () => {
        console.log(this.state.pokemonData);
        this.setState({ loading: true });
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokemonName}`)
        this.setState({
            loading: false,
            pokemonData: data.body.results.find(item => item.pokemon === this.props.match.params.pokemonName),
        });
    }

    render() {

        return (
            <div>
                <h3>Welcome to the Detail Page</h3>
                {
                    this.state.loading
                        ? <Spinner />
                        : <ul>
                            <li><img src={this.state.pokemonData.url_image} alt="pokeimage" />
                                <p>Name: {this.state.pokemonData.pokemon}</p>
                                <p>Attack: {this.state.pokemonData.attack}</p>
                                <p>Defense: {this.state.pokemonData.defense}</p>
                                <p>Type 1: {this.state.pokemonData.type_1}</p>
                                <p>Type 2: {this.state.pokemonData.type_2}</p></li>
                        </ul>
                }
            </div>
        )
    }
}
