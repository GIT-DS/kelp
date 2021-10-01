import React from 'react'
import { connect } from "react-redux";
import { fetchReview } from '../../../actions/review_actions';
import { updateReview } from '../../../util/review_api_util';
import ReviewForm from './review_form';

const mapStateToProps = (state,ownProps)=>({
    review: {},
    formType: 'Update Review'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitForm: (review) => dispatch(updateReview(ownProps.match.params.businessId, review)),
    fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)