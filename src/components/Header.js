import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';

export default withRouter(class Header extends React.Component {
    render() {
        return (
            <nav className="nav-links">

                {this.props.location.pathname !== '/' && <NavLink exact activeClassName='link' to="/">Home</NavLink>
                }
                {
                    this.props.location.pathname !== '/search' && <NavLink exact activeClassName='navLink' to='/search'>Search</NavLink>
                }
            </nav>
        )
    }
})
