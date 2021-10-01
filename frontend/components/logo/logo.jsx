import React from 'react'
import { Link } from 'react-router-dom'

const Logo = (props) => (
    <div className='logo-container'>
        <h1 id='logo'>Kelp</h1>
        <img src={window.logo} width='50px'/>   
        
    </div>
)

export default Logo