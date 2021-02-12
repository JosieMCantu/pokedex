import React, { Component } from 'react'

export default class DropDowns extends Component {
    render() {
        return (
            <>
                Sort by
                <select onChange={this.handleChange}>
                    <option value="ascending">Ascending</option>
                    <option value="descending">Descending</option>
                </select>

            </>
        )
    }
}
