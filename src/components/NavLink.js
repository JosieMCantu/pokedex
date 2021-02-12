import React, { Component } from 'react'

export default class NavLink extends Component {
    render() {
        return (
            <div>
                HOME SEARCH
            </div>
        )
    }
}
// import React from 'react'
// import { NavLink, withRouter } from 'react-router-dom';
// //Step 2: Create a header that points to home and search
// export default withRouter(class Header extends React.Component {
//     render() {
//         return (
//             <nav className='navContainer'>
//                 <img className='pokeBall' alt='Poke Ball' src={'https://s.clipartkey.com/mpngs/s/54-541985_pokeball-pokemon-png-clipart-image-transparent-pokeball.png'} />
//                 {this.props.location.pathname !== '/' && <NavLink exact activeClassName='link' to="/">Home</NavLink>
//                 }
//                 {
//                     this.props.location.pathname !== '/search' && <NavLink exact activeClassName='navLink' to='/search'>Search</NavLink>
//                 }
//             </nav>
//         )
//     }
// })