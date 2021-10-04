import React from 'react'
import StaticRating from '../rating/static_rating'
import { Link } from 'react-router-dom'
const BusinessBox = props => {
    const {id,  averageRating, sampleComment, title, categories} = props.business
    return (
    <div className='business-box'>
        <div className='business-box-content'>
            <h2>{props.index + 1}. {title}</h2>
            <StaticRating rating={averageRating}/>
            <div id='business-box-categories'>
                {categories.map((cat,i) => <Link to={`/businesses/categories/${cat}`} key={i}>{cat}</Link>
                )}
            </div>
            <div id='sample-comment'>
                <i className="far fa-comment-alt"></i>
                <p id='comment'>{sampleComment}</p>
            </div>
        </div>
    </div>
    )
}

export default BusinessBox