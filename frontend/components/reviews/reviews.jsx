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
        <div>
            {this.props.reviews.map((review, i) => <ReviewContainer key={i} review={review}/>)}
        </div> 
        )   
    }
}

export default Reviews;