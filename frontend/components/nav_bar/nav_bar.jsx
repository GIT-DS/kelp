import React from 'react'
import { Link } from 'react-router-dom';
class NavBar extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
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
                        <Link onClick={()=>this.props.logout()} className='clear-button'>Log Out</Link>
                    </li>
                </ul>
            )}

        return (
            <div className='nav-bar'>
                <ul>
                    <li><Link to='/reviews/create/suggestions'>Write a Review</Link></li>
                    <li><Link to='/businesses?find=0&near=0'>Businesses</Link></li>
                </ul> 
                {navRight}
            </div>
        )

    }
    
}

export default NavBar