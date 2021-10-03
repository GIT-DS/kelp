import React from 'react'
import { Link } from 'react-router-dom'
const SocialBar = props => (
    <div className='social-bar'>
        <Link to='/reviews/create/suggestions' className='green-button' id='review-button'>Write a Review</Link>
        <button className='clear-button'>Add Photo</button>
        <button className='clear-button'>Share</button>
        <button className='clear-button'>Save</button>
    </div>
)

export default SocialBar