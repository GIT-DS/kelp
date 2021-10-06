import React from 'react'
import OtherNavBar from '../../nav_bar/other_nav_bar'
import { Link } from 'react-router-dom'

class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.submitHandler = this.submitHandler.bind(this)
    }

    componentDidMount (){
        this.props.fetchReview(this.props.match.params.reviewId).then(()=> {
            console.log(this.props)
            let {rating, comment, userId, businessId, id} = this.props.review
            this.setState({
                rating: rating,
                comment: comment,
                userId: userId,
                id: id,
                businessId: businessId,
                error: ''

            })
            
        })
        
    }


    componentWillUnmount(){
        this.props.removeReviewErrors()
    }

    update(field){
        
        return e => this.setState({[field]: e.currentTarget.value})
    }

    submitHandler(e){
        e.preventDefault();
        if (this.state.comment === ''){
            this.setState({error: "Comment can't be blank"})
            return
        }
        this.props.submitForm(this.state)
        .then(() => this.props.history.push(`/businesses/${this.state.businessId}`))
    }

    errorId(){
        if (this.state.error !== "") return 'error-field'
        return null;
    }

    reviewDescription(){
        switch(parseInt(this.state.rating)){
            case 1:
                return 'Not Good'
            case 2:
                return "Could've been better"
            case 3:
                return 'OK'
            case 4:
                return 'Good'
            case 5:
                return 'Great'
            default:
                return ""
        }
    }

    radioButtons(number){
        const logo = <img src={window.smalllogo}/>

        return (
            
            <>
                <input id={`rating${number}`}
                    name="rating" 
                    type="radio" value={`${number}`} 
                    className="radio-btn hide" 
                    onChange={this.update('rating')}  
                />
                <label htmlFor={`rating${number}`}>{logo}</label>
            </>
        )
        }

    render(){

        if (!this.props.review) return null
        if (this.props.review.userId != this.props.sessionId){
            return (
                
                <div className='error'>
                    <OtherNavBar/>
                    <h3>You can't edit this post!</h3>
                    <Link to='/'>Go Home</Link>
                </div>
            )
        }



        return(
            <div className='review-form-container'>
                <OtherNavBar/>
                <div className='review-form-content'>
                    <h1><Link to={`/businesses/${this.props.review.businessId}`}>{this.props.review.businessTitle}</Link></h1>
                    <form>
                            <div id='inputs'>
                                <div className='radio-container'>
                                    <div className='rating' >
                                        {this.radioButtons(5)}
                                        {this.radioButtons(4)}
                                        {this.radioButtons(3)}
                                        {this.radioButtons(2)}
                                        {this.radioButtons(1)}
                                    </div>
                                    <p>{this.reviewDescription()}</p>
                                </div>

                            <div className='text-area-container' id={this.errorId()}>
                                <textarea 
                                className='comment' 
                                value={this.state.comment} 
                                onChange={this.update('comment')}
                                />
                            </div>
                            <p id='error-message'>{this.state.error}</p>
                        </div>

                        <button onClick={this.submitHandler}>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default EditReviewForm