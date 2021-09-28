import React from 'react'
import { connect } from "react-redux";
import { fetchAllReviews } from '../../actions/review_actions';
import Reviews from './reviews';

const mapStateToProps = (state) => ({
    reviews: Object.values(state.entities.reviews)
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return{
    fetchAllReviews: () => dispatch(fetchAllReviews(ownProps.businessId))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)