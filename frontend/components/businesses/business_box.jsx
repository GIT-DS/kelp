import React from 'react'
import StaticRating from '../rating/static_rating'
import { useHistory } from 'react-router-dom'


const BusinessBox = props => {

    let history = useHistory();

    function clickHandler(e, cat){
         
        e.preventDefault()
        history.push(`/businesses/${cat}/0`)
        
    }


        const {id,  averageRating, sampleComment, title, categories} = props.business
        return (
        <div className='business-box'>
            <div className='business-box-content'>
                <h2>{props.index + 1}. {title}</h2>
                <StaticRating rating={averageRating}/>
                <div id='business-box-categories'>
                    {categories.map((cat,i) => <button onClick={e => clickHandler(e, cat)} key={i}>{cat}</button>
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