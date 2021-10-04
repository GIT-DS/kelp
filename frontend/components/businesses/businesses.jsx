import React from 'react'
import { Link } from 'react-router-dom';
import BusinessNavBarContainer from '../nav_bar/business_nav_bar_container';
// import SearchBar from '../search_bar/search_bar';
// import BusinessesContainer from './businesses_container';
import BusinessBox from './business_box';

class Businesses extends React.Component{
    constructor(props){
        super(props)
        this.makeMap = this.makeMap.bind(this)
        this.state = {b: []}
        this.filter = this.filter.bind(this)

    }
    
    filter(find, near){
        let businesses = this.props.businesses
        if (this.props.find && this.props.near) {
        if (find !== '0'){ businesses = businesses.filter(business => business.categories.map(cat => cat.toLowerCase()).includes(find.toLowerCase()))}
        if (near !== '0'){ businesses = businesses.filter(business => business.city.toLowerCase() === near.toLowerCase())}
        }
        let preState = {b: businesses};

        // if (this.state !== preState) return null;
        this.setState(preState);
    }
    
    
    componentDidMount(){
        this.props.fetchAllBusinesses().then(()=> this.filter(this.props.find, this.props.near))
        
        // this.businesses = this.filter(this.props.find, this.props.near)
    }

    componentDidUpdate(){
        this.makeMap()
    }

    makeMap(){
        let cent = {lat: 34.0462312861572, lng: -118.26394516974035}
        if (this.state.b.length === 1) cent = {lat: this.state.b[0].latitude, lng: this.state.b[0].longitude}
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: cent,
            zoom: 11,
            disableDefaultUI: true,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{visibility: 'off'}]
                }
            ]
        })
        this.state.b.map((business, i) => {

            let {latitude, longitude, title} = business
            let marker = new google.maps.Marker({
                position: {lat: latitude, lng: longitude},
                map: this.map,
                label: title.slice(0,1),
                title: title,
                animation: google.maps.Animation.DROP,
                
            })
            google.maps.event.addListener(marker, 'click', function() {
                window.location.href = `#/businesses/${business.id}`;
            });
        })
    }



    render(){
        return (
            <div className='business-index'>
                <BusinessNavBarContainer/>
                <div className='business-index-content'>
                    <div id='business-list'>
                        {this.state.b.map((business,i) => (
                        <Link to={`/businesses/${business.id}`} key={i}>
                            <BusinessBox business={business}  index={i}/>
                        </Link>
                        ))}
                    </div>
                    <div className='businesses-map' id='map'></div>
                </div>
            </div>
        )
    }
}

export default Businesses