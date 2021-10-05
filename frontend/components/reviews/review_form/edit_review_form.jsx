import React from 'react'
import OtherNavBar from '../../nav_bar/other_nav_bar'
import { Link } from 'react-router-dom'

class EditReviewForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
        this.submitHandler = this.submitHandler.bind(this)
    }
    componentDidMount(){
        this.props.fetchReview(this.props.match.params.reviewId)
            .then(res => this.setState(res.review))

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
                                placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                                molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                                numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                                optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
                                obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
                                nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
                                tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                                quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos 
                                sapiente officiis modi at sunt excepturi expedita sint? Sed quibusdam
                                recusandae alias error harum maxime adipisci amet laborum. Perspiciatis 
                                minima nesciunt dolorem! Officiis iure rerum voluptates a cumque velit 
                                quibusdam sed amet tempora. Sit laborum ab, eius fugit doloribus tenetur 
                                fugiat, temporibus enim commodi iusto libero magni deleniti quod quam 
                                consequuntur! Commodi minima excepturi repudiandae velit hic maxime
                                doloremque. Quaerat provident commodi consectetur veniam similique ad 
                                earum omnis ipsum saepe, voluptas, hic voluptates pariatur est explicabo 
                                fugiat, dolorum eligendi quam cupiditate excepturi mollitia maiores labore 
                                suscipit quas? Nulla, placeat. Voluptatem quaerat non architecto ab laudantium
                                modi minima sunt esse temporibus sint culpa, recusandae aliquam numquam 
                                totam ratione voluptas quod exercitationem fuga. Possimus quis earum veniam 
                                quasi aliquam eligendi, placeat qui corporis!"
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