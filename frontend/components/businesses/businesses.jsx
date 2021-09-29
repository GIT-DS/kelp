import React from 'react'
import { Link } from 'react-router-dom';
import BusinessesContainer from './businesses_container';

class Businesses extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }
    render(){
        return (
        <div id='business-list'>
            {this.props.businesses.map((business,i) => <Link to={`/businesses/${business.id}`} key={business.id}>{business.title}</Link>)}
        </div>
        )
    }
}

export default Businesses