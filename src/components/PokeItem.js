import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class PokeItem extends Component {
    render() {
        const {
            pokeProp: {
                url_image,
                pokemon,
                type_1,
                attack,
                defense
            }
        } = this.props;
        return (
            <Link to={this.props.pokeProp.pokemon}>
                <div><li><img alt="pokemon" src={url_image} />
                    <p>Pokemon name:{pokemon}</p>
                    <p>Type: {type_1}</p>
                    <p>Attack: {attack}</p>
                    <p>Defense: {defense}</p></li>
                </div>
            </Link>
        )
    }
}
