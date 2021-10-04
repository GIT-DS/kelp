import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';
import Logo from '../logo/logo';
import Footer from '../footer/footer';

const LandingPage = (props) => {
    return <div>
        <NavBarContainer/>
        <div className='landing-search-container'>
            <Logo/>
            <SearchBar history={props.history}/>
        </div>    
    </div>
}

export default LandingPage;