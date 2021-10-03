import React from 'react'
import { connect } from "react-redux";
import { fetchAllBusinesses } from '../../../../actions/business_actions';
import ReviewSuggestion from './review_suggestions';


const mapStateToProps = (state)=>({
    businesses: Object.values(state.entities.businesses)
})

const mapDispatchToProps = (dispatch) => ({
    fetchAllBusiness: () => dispatch(fetchAllBusinesses())
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewSuggestion)