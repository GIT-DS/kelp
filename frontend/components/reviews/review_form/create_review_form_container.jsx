import React from 'react'
import { connect } from "react-redux";
import { fetchBusiness } from '../../../actions/business_actions';
import { createReview, removeReviewErrors } from '../../../actions/review_actions';
import CreateReviewForm from './create_review_form';

const mapStateToProps = (state,ownProps)=>({
    review: {
        rating: '',
        comment: '',
        userId: state.session.id,
        businessId: ownProps.match.params.businessId,
    },
    formType: 'Create Review',
    business: state.entities.businesses[ownProps.match.params.businessId],
    errors: state.ui.errors.reviewErrors,
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    submitForm: (review) => dispatch(createReview(review)),
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.businessId)),
    removeReviewErrors: () => dispatch(removeReviewErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm)