import React from 'react'
import { connect } from "react-redux";
import Review from './review';
import { fetchUser } from '../../actions/user_actions';


const mapStateToProps = (state, ownProps) => {
    return{
    review: ownProps.review,
    user: state.entities.users[ownProps.review.userId]
}}

const mapDispatchToProps = dispatch => ({
    fetchUser: (userId)=> dispatch(fetchUser(userId))
})
export default connect(mapStateToProps, mapDispatchToProps)(Review)