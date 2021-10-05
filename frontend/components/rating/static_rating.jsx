import React from 'react'

const StaticRating = props => {

    let {rating} = props

    rating = Math.floor(rating)
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

    let created = ""
    if (props.createdAt !== undefined){
        let date = new Date(props.createdAt).toLocaleDateString('en-US',{month: '2-digit',day: '2-digit', year:'numeric'})
        created = <p id='created'>{date}</p>
    }
    return (
    <div id='rating-bar'>
        {ratingContent.map((rating,i) => <div className='outer' key={i}>{rating}</div>)}
        {created}
    </div>
    )
}

export default StaticRating;