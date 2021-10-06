import React from 'react'
import OtherNavBar from '../../nav_bar/other_nav_bar'
import { Link } from 'react-router-dom'

class CreateReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = this.props.review
        this.submitHandler = this.submitHandler.bind(this)

    }
    
    componentDidMount(){
        this.props.fetchBusiness()
    }
    
    update(field){
        return e => this.setState({[field]: e.currentTarget.value})
    }
    
    submitHandler(e){
        e.preventDefault();
        const {rating, comment, userId, businessId} = this.state
        let snake = {
            rating: rating,
            comment: comment,
            user_id: userId,
            business_id: businessId
        }
        
        this.props.submitForm(snake).then(()=>this.props.history.push(`/businesses/${this.state.businessId}`))
        
    }
    
    componentWillUnmount(){
        this.props.removeReviewErrors();
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
    
    errorMessage(field, type){
        let errors = this.props.errors.map(error => error.split(' ')[0])
        if ( type === 'id' && errors.filter( error => error === field).length > 0) return 'error-field'
        if (type === 'message') return <p id='error-message'>{this.props.errors.filter(error => error.split(' ')[0] === field)}</p>
         
        return null;
    }


    render(){
        if (!this.props.business) return null
        let errors;
        (this.props.errors.length > 0) ? errors = this.props.errors.map( (error, i) => <li key={i}>{error}</li>)  : errors = ''

        return(
            <div className='review-form-container'>
                <OtherNavBar/>
                <div className='review-form-content'>
                    <h1>
                        <Link to={`/businesses/${this.props.business.id}`}>
                            {this.props.business.title}
                        </Link>
                    </h1>
                    <form>
                            <div id='inputs'>
                                <div className='radio-container'>
                                    <div className='rating' id={this.errorMessage('Rating', 'id')}>
                                        {this.radioButtons(5)}
                                        {this.radioButtons(4)}
                                        {this.radioButtons(3)}
                                        {this.radioButtons(2)}
                                        {this.radioButtons(1)}
                                    </div>
                                    <p>{this.reviewDescription()}</p>
                                </div>
                                {this.errorMessage('Rating', 'message')}

                            <div className='text-area-container' id={this.errorMessage('Comment', 'id')}><textarea 
                                className='comment'
                                value={this.state.comment} 
                                onChange={this.update('comment')}
                                placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                                sunt in culpa qui officia deserunt mollit anim id est laborum.'
                                />
                            </div>
                                {this.errorMessage('Comment','message')}
                        </div>

                        <button onClick={this.submitHandler}>{this.props.formType}</button>
                    </form>
                </div>
            </div>
        )

    }
}

export default CreateReviewForm