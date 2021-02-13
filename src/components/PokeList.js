import React, { Component } from 'react'
import PokeItem from './PokeItem.js';

export default class PokeList extends Component {
    render() {
        return (
            <ul className="poke-list">
                {this.props.pokedata.map(pokeObject => <PokeItem key={pokeObject._id} pokeProp={pokeObject} />
                )}
            </ul>
        )
    }
}




