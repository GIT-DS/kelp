import React from 'react'
import { connect } from "react-redux";
import { fetchAllBusinesses } from '../../actions/business_actions';
import Businesses from './businesses';


const mapStateToProps = state => ({
    businesses: Object.values(state.entities.businesses)
})

const mapDispatchToProps = dispatch => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
})

export default connect(mapStateToProps, mapDispatchToProps)(Businesses)