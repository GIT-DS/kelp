import React from 'react'
class BusinessMap extends React.Component{
    constructor(props){
        super(props)
        this.map = google.maps.Map;
    }

    componentDidMount (){
        const mapOptions = {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 1
        };
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: this.props.lat, lng: this.props.lng},
            zoom: 15
        })
    }
    render(){
        return <div id='map'></div>
    }
}

export default BusinessMap