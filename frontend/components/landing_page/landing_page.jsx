import React from 'react'
import NavBar from '../nav_bar/nav_bar';
import NavBarContainer from '../nav_bar/nav_bar_container'

const LandingPage = (props) => (
    <div>
        <NavBarContainer/>
        <div className='logo'>
            <h1 id='logo'>Kelp</h1>
        </div>    
    </div>
)

export default LandingPage;