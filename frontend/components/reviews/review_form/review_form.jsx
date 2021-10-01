import React from 'react'

class ReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.submitHandler = this.submitHandler.bind(this)
    }
    componentDidMount(){
        this.props.fetchReview(this.props.match.params.businessId, this.props.match.params.reviewId)
        .then((res)=>this.setState(res.review))
    }
    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }

    submitHandler(e){
        e.preventDefault();
        this.props.submitForm(this.state)
    }
    render(){
        if(this.state.id){
        return(
            // <p>Hello</p>
            <div className='review-form-container'>
                <form onSubmit={this.submitHandler}>
                    <input type='number' value={this.state.rating} max='5' min='1' placeholder='rating' onChange={this.update('number')}/>
                    <textarea value={this.state.comment} placeholder='comment' onChange={this.update('comment')}/>
                     <button>{this.props.formType}</button>
                </form>
            </div>
        )
        } else {
            return <div></div>
        }
    }
}

export default ReviewForm