import React from 'react'
import { Link } from 'react-router-dom'
class SocialBar extends React.Component {
    constructor(props){
        super(props)
        this.backHandler = this.backHandler.bind(this)
    }
    backHandler(e){
        this.props.history.goBack();
    }
    render(){
        return (
        <div className='social-bar'>
            <Link to={`/reviews/${this.props.businessId}/create`} className='green-button' id='review-button'>Write a Review</Link>
            <button className='clear-button' onClick={this.backHandler}>Back to Businesses</button>
        </div>
        )
    }
}

export default SocialBar