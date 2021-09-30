import React from 'react'
import StaticRating from '../rating/static_rating'
import { Link } from 'react-router-dom'
const BusinessBox = props => {
    const {id,  averageRating, sampleComment, title} = props.business
    return (
    <div className='business-box'>
        {/* <img src={props.business.imageUrl}></img> */}
        <div className='business-box-content'>
            <h2><Link to={`/businesses/${id}`} >{props.index + 1}. {title}</Link></h2>
            <StaticRating rating={averageRating}/>
            <p id='sample-comment'>{sampleComment}</p>
        </div>
    </div>
    )
}

export default BusinessBox