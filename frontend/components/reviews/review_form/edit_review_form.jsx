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
        // console.log(this.props)
        // console.log('helpppp')
        this.props.submitForm(this.state)
        this.props.history.push(`/businesses/${this.state.businessId}`)
    }
    render(){


        if (!this.props.review) return null

        return(
            <div className='review-form-container'>
                <OtherNavBar/>
                <div className='review-form-content'>
                    <h1>{this.props.review.businessTitle}</h1>
                    <form>
                        <div id='inputs'>
                            <textarea id='comment' value={this.state.comment} placeholder='comment' onChange={this.update('comment')}/>
                        </div>
                        <button onClick={this.submitHandler}>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default EditReviewForm