import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <><div className="search-container">
                <input className="search-bar" value={this.props.currentValue} onChange={this.props.handleChange} />
                <button onClick={this.props.onClick}>Submit</button>
            </div>
            </>
        )
    }
}
