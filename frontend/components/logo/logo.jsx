import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => (
    <div className='logo-container'>
        <Link to='/'><h1 id='logo'>Kelp</h1></Link>
        <img src={window.logo} width='50px'/>   
        
    </div>
)

export default Logo