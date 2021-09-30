import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';
import Logo from '../logo/logo';
import Footer from '../footer/footer';

const LandingPage = (props) => (
    <div>
        <NavBarContainer/>
        <div className='landing-search-container'>
            <Logo/>
            <SearchBar/>
        </div>    
    </div>
)

export default LandingPage;