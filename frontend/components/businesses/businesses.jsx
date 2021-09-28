import React from 'react'
import { Link } from 'react-router-dom';

class Businesses extends React.Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
        this.props.fetchAllBusinesses()
    }
    render(){
        return (
        <div>
            {/* {Object.keys(this.props.businesses).map(business)} */}
        </div>
        )
    }
}

export default Businesses