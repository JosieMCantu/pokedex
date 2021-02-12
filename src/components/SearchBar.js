import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <>
                <input value={this.props.currentValue} onChange={this.handleChange} />
                <button>Submit</button>
            </>
        )
    }
}
