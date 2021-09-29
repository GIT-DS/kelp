import React from 'react'
import Reviews from '../reviews/reviews';
import ReviewsContainer from '../reviews/reviews_container'
import SocialBar from '../business_components/social_bar';
class Business extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchBusiness();
    }

    open(){
        const{timeOpen, timeClose} = this.props.business
        const currTime = new Date();
        const currHour = currTime.getHours()
        const currMin = currTime.getMinutes()
        const openHour = new Date(timeOpen).getHours()
        const openMin = new Date(timeOpen).getMinutes()
        const closeHour = new Date(timeClose).getHours()
        const closeMin = new Date(timeClose).getMinutes()

        if ((currHour >= openHour && currMin >= openMin) && (currHour <= closeHour && currMin <= closeMin)){
            return 'Open'
        } else {
            return 'Closed'
        }

    }

    formatTime(time){
        let hours = parseInt(time.getHours())
        console.log(hours)
        let M = 'AM';

        if (hours > 12 && hours !== 24) {
            hours -= 12
            M = 'PM'
        }
        hours = (hours < 10 ? '0' : '') + hours
        let minutes = (time.getMinutes() < 10 ? '0': '') + time.getMinutes()

        return `${hours}:${minutes} ${M}`
    }

    render (){
        if (this.props.business){
            const {title, timeOpen, timeClose, website = '', phoneNum, address, city, state, zipCode} = this.props.business
            let localTimeOpen = new Date(timeOpen)
            let localTimeClose = new Date(timeClose)
            return (
            <div className='business-show'>
                <div className='show-head'>
                    <img></img>
                    <div>
                        <h1 id="title">{title}</h1>
                        <p> {this.open()} {this.formatTime(localTimeOpen)} - {this.formatTime(localTimeClose)}</p>
                    </div>
                </div>
                <div className='business-content'>
                    <div className='left-content'>
                        <SocialBar/>
                        <hr />
                        <ReviewsContainer businessId={this.props.business.id}/>
                    </div>
                    <div className='side-bar-info'>
                        <ul>
                            <li>{website}</li>
                            <li>{phoneNum}</li>
                            <li>
                                <p>Get Directions</p>
                                <p>{address}</p>
                                <p>{city}, {state} {zipCode}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )} else {
            return <div></div>
        }

    }
}

export default Business