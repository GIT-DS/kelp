import React from 'react'
import OtherNavBar from '../../nav_bar/other_nav_bar'

class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.submitHandler = this.submitHandler.bind(this)
    }
    componentDidMount(){
        if (!this.props.review){
            this.props.fetchReview(this.props.match.params.reviewId)
            .then(res => this.setState(res.review))
        }
    }



    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    submitHandler(e){
        e.preventDefault();
        this.props.submitForm(this.state)
        this.props.history.push(`/businesses/${this.state.businessId}`)
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
        const {rating} = this.state
        return(
            <div className='review-form-container'>
                <OtherNavBar/>
                <div className='review-form-content'>
                    <h1>{this.props.review.businessTitle}</h1>
                    <form>
                            <div id='inputs'>
                                <div className='radio-container'>
                                    <div className='rating'>
                                        {this.radioButtons(5)}
                                        {this.radioButtons(4)}
                                        {this.radioButtons(3)}
                                        {this.radioButtons(2)}
                                        {this.radioButtons(1)}
                                    </div>
                                    <p>{this.reviewDescription()}</p>
                                </div>

                            <textarea 
                                id='comment' 
                                value={this.state.comment} 
                                onChange={this.update('comment')}
                                />
                        </div>




                        <button onClick={this.submitHandler}>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default EditReviewForm