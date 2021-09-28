import React from 'react'
import { Link } from 'react-router-dom';
import OtherNavBar from '../nav_bar/other_nav_bar';
const MissingPage = () => (
    <div id='missing-page'>
        <OtherNavBar/>
        <div id='missing-page-content'>
            <div id='missing-page-left'>
                <h2>
                    <b>404 error.</b> Cattgone it! The page you're looking for cannot be found.
                </h2>
                <p>Detective Jean Baptiste Lamarck is hot on the case of the missing webpage! While he's snipping out the problem, you should <Link to='/'>go home</Link></p>
            </div>
            <img src={window.cat} width='200px' height='200px'/>
        </div>

    </div>
)

export default MissingPage;