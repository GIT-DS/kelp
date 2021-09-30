import React from 'react'
import { Link } from 'react-router-dom';
import BusinessesContainer from './businesses_container';
import BusinessBox from './business_box';

class Businesses extends React.Component{
    constructor(props){
        super(props)
        // this.map = google.maps.Map;
        this.makeMap = this.makeMap.bind(this)
    }
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }

    componentDidUpdate(){
        this.makeMap()
    }

    makeMap(){
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 34.0462312861572, lng: -118.26394516974035},
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
        console.log(this.props.businesses)
        this.props.businesses.map((business, i) => {

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
                <div id='business-list'>
                    {this.props.businesses.map((business,i) => <BusinessBox business={business} key={i} index={i}/>)}
                </div>
                <div id='map'></div>
            </div>
        )
    }
}

export default Businesses