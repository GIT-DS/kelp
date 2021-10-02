import React from 'react'
import { connect } from "react-redux";
import { fetchReview, updateReview } from '../../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mapStateToProps = (state,ownProps)=>({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Update Review'
})

const mapDispatchToProps = (dispatch) => ({
    submitForm: (review) => dispatch(updateReview(review)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)