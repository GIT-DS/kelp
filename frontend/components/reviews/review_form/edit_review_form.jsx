import React from 'react'
import OtherNavBar from '../../nav_bar/other_nav_bar'
import { Link } from 'react-router-dom'

class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.submitHandler = this.submitHandler.bind(this)
        this.clickHandler = this.clickHandler.bind(this)
        this.deleteHandler = this.deleteHandler.bind(this)
    }

    componentDidMount (){
        this.props.fetchReview(this.props.match.params.reviewId).then(()=> {
            if (!this.props.review) this.props.history.goBack()
            let {rating, comment, userId, businessId, id} = this.props.review
            this.setState({
                businessId: businessId,
                rating: rating,
                comment: comment,
                userId: userId,
                id: id,
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

    clickHandler(e, value){
        this.setState({rating: value})
    }

    deleteHandler(e){
        this.props.deleteReview(this.props.review.id).then(()=> this.props.history.goBack())
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



    radioButtons(){


        let kelpFilled = value => (
            <div id='filled' onClick={ e =>this.clickHandler(e, value)} value={value} key={value}>
                <img id='small' src={window.logo} width='10' height='10'/>
            </div> 
        )
        let kelpUnfilled = value => (
            <div id='unfilled'onClick={e =>this.clickHandler(e, value)} value={value} key={value}>
                <img id='small' src={window.logo} width='10' height='10'/> 
            </div>
        )
        let ratingContent = []
        for(let i = 0; i < this.state.rating; i++){
            ratingContent.push(kelpFilled(i))
        }
        for(let i= this.state.rating + 1; i <= 5 ; i++){
            ratingContent.push(kelpUnfilled(i))
        }
    

        return (
        <div id='interactive-rating-bar'>
            {ratingContent.map(rating => rating)}
        </div>
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
                                {this.radioButtons()}

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
                        <br/>
                        <button onClick={this.deleteHandler}>Delete Review</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default EditReviewForm