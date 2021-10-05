import React from 'react'
import ReviewsContainer from '../reviews/reviews_container'
import SocialBar from '../business_components/social_bar';
import BusinessMap from '../map/business_map';
import BusinessNavBarContainer from '../nav_bar/business_nav_bar_container';
import StaticRating from '../rating/static_rating';
import { Link } from 'react-router-dom';
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
        const currTotalMinutes = currHour * 60 + currMin
        const openHour = new Date(timeOpen).getHours()
        const openMin = new Date(timeOpen).getMinutes()
        const openTotalMinutes = openHour * 60 + openMin
        const closeHour = new Date(timeClose).getHours()
        const closeMin = new Date(timeClose).getMinutes()
        const closeTotalMinutes = closeHour * 60 + closeMin
        if (currTotalMinutes >= openTotalMinutes && currTotalMinutes <= closeTotalMinutes){
            return <span id='green'>Open</span>
        } else {
            return <span id='red'>Closed</span>
        }

    }

    formatTime(time){
        let hours = parseInt(time.getHours())
        let M = 'AM';

        if (hours > 12 && hours !== 24) {
            hours -= 12
            M = 'PM'
        }
        hours = (hours < 10 ? '0' : '') + hours
        let minutes = (time.getMinutes() < 10 ? '0': '') + time.getMinutes()

        return `${hours}:${minutes} ${M}`
    }

    website(){
        if(this.props.website){
            return <li>
                <div><a href={website}>{webiste}</a></div>
                <i className="fas fa-external-link-alt"></i>
            </li>
        }
    }



    render (){
        if (this.props.business){
            const {id, title, timeOpen, timeClose, website = '', phoneNum, address, city, state, zipCode, latitude, longitude, cost, categories, averageRating} = this.props.business
            let localTimeOpen = new Date(timeOpen)
            let localTimeClose = new Date(timeClose)
            let LTOS = this.formatTime(localTimeOpen)
            let LTCS = this.formatTime(localTimeClose)
            let currDay = new Date().getDay()
            let addressMap = `${address.split(' ').join('+')}+${city.split(' ').join('+')}+${state}+${zipCode}`
            console.log(addressMap) 
            return (
            <div className='business-show'>
                <BusinessNavBarContainer/>
                <div className='show-head' style={{backgroundImage: `linear-gradient(rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%), url(${this.props.business.photosUrl[0]})`}}>
                    <div className='business-header-info'>
                            <h1 id="title">{title}</h1>
                        <div id='rating-container'>
                            <StaticRating rating={averageRating}/>
                            <p>{this.props.numReviews} Reviews</p>
                        </div>
                        <div id='sub-info'>
                            <p>{cost}</p>
                            <p>●</p>
                            {categories.map((cat,i) => <Link to={`/businesses?find=${cat}`} key={i}>{cat}{i < categories.length - 1 ? ',  ' : ''}</Link>)}
                        </div>
                        <p> {this.open()} {LTOS} - {LTCS}</p>
                    </div>
                </div>
                <div className='business-content'>
                    <div className='left-content'>
                        <SocialBar history={this.props.history} businessId={id}/>
                        <hr id='review-hr'/>
                        <div className='location-hours'>
                            <h3>Location and Hours</h3>
                            <div className='lc-content'>
                                <div className='map-container'>
                                    <BusinessMap business={this.props.business}/>
                                    <div className='under-map'>
                                        <div className='map-address'>
                                            <p>{address}</p>
                                            <p>{city}, {state}</p>
                                            <p>{zipCode}</p>
                                        </div>
                                        <a className='border-button' href={`https://www.google.com/maps/dir//${addressMap}/`}>Get Directions</a>
                                    </div>
                                </div>
                                <div className='day-hours-container'>
                                    <div id='days'>
                                        {currDay === 1 ? <p id='bold'>Mon</p> : <p>Mon</p>}
                                        {currDay === 2 ? <p id='bold'>Tue</p> : <p>Tue</p>}
                                        {currDay === 3 ? <p id='bold'>Wed</p> : <p>Wed</p>}
                                        {currDay === 4 ? <p id='bold'>Thu</p> : <p>Thu</p>}
                                        {currDay === 5 ? <p id='bold'>Fri</p> : <p>Fri</p>}
                                        {currDay === 6 ? <p id='bold'>Sat</p> : <p>Sat</p>}
                                        {currDay === 0 ? <p id='bold'>Sun</p> : <p>Sun</p>}
                                    </div>
                                    <div id='hours'>
                                        <p>{LTOS} - {LTCS}</p>
                                        <p>{LTOS} - {LTCS}</p>
                                        <p>{LTOS} - {LTCS}</p>
                                        <p>{LTOS} - {LTCS}</p>
                                        <p>{LTOS} - {LTCS}</p>
                                        <p>{LTOS} - {LTCS}</p>
                                        <p>{LTOS} - {LTCS}</p>
                                    </div>
                                    <div className='open'>
                                        {currDay === 1 ? this.open() : " "}
                                        {currDay === 2 ? this.open() : " " }
                                        {currDay === 3 ? this.open() : " " }
                                        {currDay === 4 ? this.open() : " " }
                                        {currDay === 5 ? this.open() : " " }
                                        {currDay === 6 ? this.open() : " " }
                                        {currDay === 0 ? this.open() : " " }
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr id='review-hr'/>
                        <ReviewsContainer businessId={this.props.business.id}/>
                    </div>
                    <div className='side-bar-info'>
                        <ul>
                            {this.website()}
                            <li>
                                <div>{phoneNum}</div>
                                <i className="fas fa-phone-alt"></i>
                            </li>
                            <hr id='side-hr'/>  
                            <li>
                                <div id='side-directions'>
                                    <a href={`https://www.google.com/maps/dir//${addressMap}/`}>Get Directions</a>
                                    <p>{address}</p>
                                    <p>{city}, {state} {zipCode}</p>
                                </div>
                                <i className="fas fa-directions"></i>
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