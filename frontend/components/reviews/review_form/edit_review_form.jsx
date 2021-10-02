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
            this.props.fetchReview(this.props.match.params.businessId, this.props.match.params.reviewId)
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

    render(){

        const logo = <img src={window.smalllogo}/>
        if (!this.props.review) return null

        return(
            <div className='review-form-container'>
                <OtherNavBar/>
                <div className='review-form-content'>
                    <h1>{this.props.review.businessTitle}</h1>
                    <form>
                            <div id='inputs'>
                                <div className='radio-container'>
                                    <div className="rating">
                                        <input id="rating5" name="rating" type="radio" value="5" className="radio-btn hide" onChange={this.update('rating')}/>
                                        <label htmlFor="rating5">{logo}</label>
                                        <input id="rating4" name="rating" type="radio" value="4" className="radio-btn hide" onChange={this.update('rating')}/>
                                        <label htmlFor="rating4">{logo}</label>
                                        <input id="rating3" name="rating" type="radio" value="3" className="radio-btn hide" onChange={this.update('rating')}/>
                                        <label htmlFor="rating3">{logo}</label>
                                        <input id="rating2" name="rating" type="radio" value="2" className="radio-btn hide" onChange={this.update('rating')}/>
                                        <label htmlFor="rating2">{logo}</label>
                                        <input id="rating1" name="rating" type="radio" value="1" className="radio-btn hide" onChange={this.update('rating')}/>
                                        <label htmlFor="rating1">{logo}</label>
                                        <div className="clear"></div>
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