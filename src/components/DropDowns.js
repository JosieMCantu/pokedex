import React, { Component } from 'react'

export default class DropDowns extends Component {
    render() {
        return (
            <><div className="drop-container">
                <select value={this.props.currentValue} onChange={this.props.handleChange}>{this.props.options.map(listItem => <option key={listItem} value={listItem}>{listItem}</option>)}
                </select>
            </div>
            </>
        )
    }
}
