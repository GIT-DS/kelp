import React from 'react'
import StaticRating from '../rating/static_rating';
import { Link } from 'react-router-dom';

class Review extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchUser(this.props.review.userId)
    }
    
    render(){
        let userContent = "";
        const {rating, createdAt, comment, id, userId} = this.props.review
        if (this.props.user){
            const{ firstName, lastName, zipCode} = this.props.user

            userContent = (
                <div className='user-container'>
                    <img src={this.props.user.photoUrl} width='50px' height='50px'/>
                    <div className='user-info'>
                        <h4>{firstName} {lastName}.</h4>
                        <p>{zipCode}</p>
                    </div>
                </div>      
            )
        }
        return <div className='review-container'>
            {userContent}
            <StaticRating rating={rating} createdAt={createdAt}/>
            <p className='comment'>{comment}</p>
            {userId == this.props.sessionId ? <Link to={`/reviews/${id}/edit`}>Edit Review</Link> : ""}
        </div>
    }
} 


export default Review