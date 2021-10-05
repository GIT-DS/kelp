import React from 'react'
import BusinessBox from '../../../businesses/business_box'
import OtherNavBar from '../../../nav_bar/other_nav_bar'
import { Link } from 'react-router-dom'
import LoginFormContainer from '../../../session/login_form_container'

class ReviewSuggestion extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchAllBusiness()
    }

    render(){
        if (!this.props.businesses) return null
        if (!this.props.currentUser){
            return <LoginFormContainer/>
        } else {

        
        return(
            <div className='suggestion-content'>
                <OtherNavBar />
                <h1>Been to these businesses recently?</h1>
                <div className='business-suggestions'>
                    {this.props.businesses.map((business, i) => <Link to={`/reviews/${business.id}/create`} key={i}><BusinessBox business={business} index={i}/></Link>)}
                </div>
            </div>
        )
        }
    }
}

export default ReviewSuggestion