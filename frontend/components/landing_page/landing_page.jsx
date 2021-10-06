import React from 'react'
import NavBarContainer from '../nav_bar/nav_bar_container'
import SearchBar from '../search_bar/search_bar';
import Logo from '../logo/logo';
import BusinessBox from '../businesses/business_box';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }

    render(){
        if (!this.props.businesses) return null
        return <div>
            <NavBarContainer/>
            <div className='landing-search-container'>
                <Logo/>
                <SearchBar history={this.props.history}/>
            </div>    
            <div id='business-suggestions'>
                <h1>Popular Businesses</h1>
                <div id='popular-businesses'>
                    {this.props.businesses.filter(business => business.averageRating >= 4).map((business, i) => <Link to={`/businesses/${business.id}`} key={i}><BusinessBox business={business} history={this.props.history} key={i} index={i}/></Link>)}

                </div>
            </div>
        </div>
    }
}

export default LandingPage;