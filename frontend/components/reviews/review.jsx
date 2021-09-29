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
            console.log(zipCode)
            userContent = (
                <div className='user-info'>
                    <h4>{firstName} {lastName.slice(0,1)}.</h4>
                    <p>{zipCode}</p>
                </div>
            )
        }
        return <div className='review-container'>
            <div className='user-container'>
                <img width='50px' height='50px'/>
                <div className='user-info'>
                    {userContent}
                </div>
            </div>        
            <p className='comment'>{this.props.review.comment}</p>
        </div>
    }
} 


export default Review