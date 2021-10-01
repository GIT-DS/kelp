import React from 'react'
import { connect } from "react-redux";
import { fetchReview, updateReview } from '../../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mapStateToProps = (state,ownProps)=>({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Update Review'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    submitForm: (review) => dispatch(updateReview(ownProps.match.params.businessId, review)),
    fetchReview: (businessId, reviewId) => dispatch(fetchReview(businessId, reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)