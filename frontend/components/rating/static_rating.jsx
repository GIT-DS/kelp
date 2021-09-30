import React from 'react'

const StaticRating = props => {

    const {rating} = props
    let kelpFilled = (
        <div id='filled'>
            <img id='small' src={window.logo} width='10' height='10'/>
        </div> 
    )
    let kelpUnfilled = (
        <div id='unfilled'>
            <img id='small' src={window.logo} width='10' height='10'/> 
        </div>
    )
    let ratingContent = []
    for(let i = 0; i < rating; i++){
        ratingContent.push(kelpFilled)
    }
    for(let i= 0; i < 5 - rating; i++){
        ratingContent.push(kelpUnfilled)
    }

    let date = new Date(props.createdAt)
    let month = date.getMonth()
    let day = date.getDay()
    let year = date.getFullYear()
    return (
    <div id='rating-bar'>
        {ratingContent.map((rating,i) => <div className='outer' key={i}>{rating}</div>)}
        <p id='created'>{month}/{day}/{year}</p>
    </div>
    )
}

export default StaticRating;