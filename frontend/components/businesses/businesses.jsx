import React from 'react'
import { Link } from 'react-router-dom';
import BusinessNavBarContainer from '../nav_bar/business_nav_bar_container';
// import SearchBar from '../search_bar/search_bar';
// import BusinessesContainer from './businesses_container';
import BusinessBox from './business_box';
import BusinessBoxContainer from './business_box_container';

class Businesses extends React.Component{
    constructor(props){
        super(props)
        this.makeMap = this.makeMap.bind(this)
        this.state = {b: []}
        this.filter = this.filter.bind(this)
        this.count = 0
    }
    


    filter(find, near){
        let businesses = this.props.businesses
        let findArr = [];
        if (this.props.find === '0' && this.props.near === '0') findArr = businesses
        if (this.props.find && this.props.near) {
            if (find !== '0'){
                let title = (businesses.filter(business => business.title.toLowerCase().split(' ').includes(find.toLowerCase())))
                let category = businesses.filter(business => business.categories.map(cat => cat.toLowerCase()).includes(find.toLowerCase()))
                findArr = findArr.concat(title, category)
            }

            if (near !== '0'){ 
                if (find === '0') {
                findArr = businesses.filter(business => business.city.toLowerCase() === near.toLowerCase())
                } else {
                    findArr = findArr.filter(business => business.city.toLowerCase() === near.toLowerCase())
                }
            } 

        }
        this.setState({b: findArr})

    }
    
    componentDidMount(){
        this.props.fetchAllBusinesses()
        .then(()=> this.setState(this.filter(this.props.find, this.props.near)))
        window.scrollTo(0,top)
    }

    componentDidUpdate(prevProps){
        if(prevProps.find !== this.props.find || prevProps.near !== this.props.near) {
            this.filter(this.props.find, this.props.near)
        }
        this.makeMap()
    }


    makeMap(){
        let cent = {lat: 34.0462312861572, lng: -118.26394516974035}
        if (this.state.b.length > 0) cent = {lat: this.state.b[0].latitude, lng: this.state.b[0].longitude}
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
                                <BusinessBoxContainer business={business}  index={i}/>
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