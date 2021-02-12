import React, { Component } from 'react'

import CharacterList from '../components/CharacterList.js';
import pokedata from '../data.js';
// import pokedata from '../data.js';

export default class ListPage extends Component {


    render() {
        const listPoke = this.props.pokedata.map(
            pokedata => <CharacterList name={this.props.pokedata.pokemon} key={pokedata._id} />
        )

        return (
            <div>
                <h1>{listPoke}</h1>
            </div>
        )
    }
}
