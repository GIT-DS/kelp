import React from 'react'
import { connect } from "react-redux";
import { fetchBusiness } from '../../../actions/business_actions';
import { createReview } from '../../../actions/review_actions';
import CreateReviewForm from './create_review_form';

const mapStateToProps = (state,ownProps)=>({
    review: {
        rating: '',
        comment: '',
        userId: state.session.id,
        businessId: ownProps.match.params.businessId,
    },
    formType: 'Create Review',
    business: state.entities.businesses[ownProps.match.params.businessId]
})

const mapDispatchToProps = (dispatch,ownProps) => ({
    submitForm: (review) => dispatch(createReview(review)),
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.businessId))
})

export default connect(mapStateToProps, mapDispatchToProps)(CreateReviewForm)