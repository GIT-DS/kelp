import React from 'react'

class Review extends React.Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.fetchUser(this.props.review.userId)
    }
    
    render(){
        let userContent = "";
        if (this.props.user){
            const{ firstName, lastName, zipCode} = this.props.user
            userContent = (
                <div className='user-container'>
                    <img src={this.props.user.photoUrl}width='50px' height='50px'/>
                    <div className='user-info'>
                        <h4>{firstName} {lastName.slice(0,1)}.</h4>
                        <p>{zipCode}</p>
                    </div>
                </div>      
            )
        }
        return <div className='review-container'>
            {userContent}     
            <p className='comment'>{this.props.review.comment}</p>
        </div>
    }
} 


export default Review