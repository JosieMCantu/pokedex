import React, { Component } from 'react'


export default class CharacterList extends Component {

    render() {

        return (
            <div>
                <p>{this.props.pokedata.pokemon}</p>
            </div>
        )
    }
}
