import React from 'react'
class Reviews extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    
    componentDidMount(){
        this.props.fetchAllReviews()
    }

    render(){
        return(
        <div>
            {this.props.reviews.map((review, i) => <li key={i}>{review.comment}</li>)}
        </div> 
        )   
    }
}

export default Reviews;