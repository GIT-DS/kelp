import React from 'react'
import { Link } from 'react-router-dom'
class SocialBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
        <div className='social-bar'>
            <Link to={`/reviews/${this.props.businessId}/create`} className='green-button' id='review-button'>Write a Review</Link>
            <Link to='/businesses?find=0&near=0' className='clear-button' >Back to Businesses</Link>
        </div>
        )
    }
}

export default SocialBar