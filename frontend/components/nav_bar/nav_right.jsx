import React from 'react'

const NavRight = props => {
    let navRight;
    if (!this.props.currentUser) {
        navRight = (
            <ul>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup' className='clear-button'>Sign Up</Link></li>
            </ul>
        )} else {
            navRight = (
            <ul>
                <li>
                    <button onClick={()=>this.props.logout()} className='clear-button'>Log Out</button>
                </li>
            </ul>
        )
    }
    return navRight;
}

export default NavRight