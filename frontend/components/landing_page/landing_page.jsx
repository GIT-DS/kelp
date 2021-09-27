import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';

const LandingPage = (props) => (
    <div>
        <NavBarContainer/>
        <div className='logoContainer'>
            <h1 id='logo'>Kelp</h1>
            <SearchBar/>
        </div>    
    </div>
)

export default LandingPage;