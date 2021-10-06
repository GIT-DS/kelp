import React from 'react'
import { connect } from "react-redux";
import { fetchReview, updateReview, removeReviewErrors, deleteReview} from '../../../actions/review_actions';
import EditReviewForm from './edit_review_form';

const mapStateToProps = (state,ownProps)=>({
    review: state.entities.reviews[ownProps.match.params.reviewId],
    formType: 'Update Review',
    sessionId: state.session.id,
    errors: state.ui.errors.reviewErrors,
})

const mapDispatchToProps = (dispatch) => ({
    submitForm: (review) => dispatch(updateReview(review)),
    fetchReview: (reviewId) => dispatch(fetchReview(reviewId)),
    removeReviewErrors: () => dispatch(removeReviewErrors()),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditReviewForm)