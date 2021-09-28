import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../logo/logo'
const OtherNavBar = (props) => (
    <Link to='/' className='other-nav-bar'>
        <Logo />
    </Link>
)

export default OtherNavBar