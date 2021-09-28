import React from 'react'
import { connect } from "react-redux";
import { fetchBusiness } from '../../actions/business_actions';
import Business from './business';

const mapStateToProps = (state, ownProps) => ({
    business: state.entities.businesses[ownProps.match.params.id]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    fetchBusiness: () => dispatch(fetchBusiness(ownProps.match.params.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Business)