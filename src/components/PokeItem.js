import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        const {
            pokeProp: {
                url_image,
                pokemon,
                attack,
                defense
            }
        } = this.props;
        return (
            <div><li><img alt="pokemon" src={url_image} />
                <p>Pokemon name:{pokemon}</p>
                <p>Attack: {attack}</p>
                <p>Defense: {defense}</p></li>
            </div>
        )
    }
}
