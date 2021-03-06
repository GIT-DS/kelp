import React from 'react'
import ReviewContainer from './review_container'
class Reviews extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchAllReviews()
    }

    render(){
        return(
        <div className='reviews'>
            {this.props.reviews.map((review, i) => (
                <div key={i}>
                    <ReviewContainer key={review.id} review={review}/>
                    <hr id='review-hr'/>
                </div>
            ))}
        </div> 
        )   
    }
}

export default Reviews;