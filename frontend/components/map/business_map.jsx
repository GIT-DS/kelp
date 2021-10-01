import React from 'react'
class BusinessMap extends React.Component{
    constructor(props){
        super(props)
        this.map = google.maps.Map;
    }

    componentDidMount (){
        const {latitude, longitude, title} = this.props.business

        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: latitude, lng: longitude},
            zoom: 15,
            disableDefaultUI: true,
            styles: [
                {
                    featureType: 'poi',
                    elementType: 'labels',
                    stylers: [{visibility: 'off'}]
                }
            ]
        })

        new google.maps.Marker({
            position: {lat: latitude, lng: longitude},
            map: this.map,
            label: title.slice(0,1),
            title: title,
            animation: google.maps.Animation.DROP,
        })


    }
    render(){
        return <div className='bus-map' id='map'></div>
    }
}

export default BusinessMap