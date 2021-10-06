import React from 'react'
import { Link } from 'react-router-dom';
import SearchBarContainer from '../search_bar/search_bar_container';
class BusinessNavBar extends React.Component{
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
            <div className='business-nav'>
                <div className='nav-bar'>
                    <Link id='business-logo' to='/'>
                        
                        <h1>Kelp</h1>
                        <img src={window.logo}/>
                        
                    </Link>
                    <SearchBarContainer/>
                    {navRight}
                </div>
            </div>
        )

    }
    
}

export default BusinessNavBar