import React from 'react'
import { connect } from "react-redux";
import { fetchAllBusinesses } from '../../actions/business_actions';
import { findTerm, nearTerm } from '../../util/search_util';
import Businesses from './businesses';


const mapStateToProps = (state,ownProps) => {
    // console.log(ownProps)
    
    return {
    businesses: Object.values(state.entities.businesses),
    find: findTerm(ownProps.location.search),
    near: nearTerm(ownProps.location.search),
    location: ownProps.location.pathname
}}

const mapDispatchToProps = dispatch => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Businesses)