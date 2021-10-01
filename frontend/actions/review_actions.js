export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS'
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW'
import * as ReviewUtil from '../util/review_api_util'

const receiveAllReviews = reviews => {
    return{
    type: RECEIVE_ALL_REVIEWS,
    reviews
}}

const receiveReview = review => ({
    type: RECEIVE_REVIEW,
    review
})

export const fetchAllReviews = businessId => dispatch => (
    ReviewUtil.fetchReviews(businessId).then(reviews => dispatch(receiveAllReviews(reviews)))
)

export const fetchReview = (businessId, reviewId) => dispatch => (
    ReviewUtil.fetchReview(businessId, reviewId).then(review => dispatch(receiveReview(review)))
)

export const createReview = (businessId, review) => dispatch => (
    ReviewUtil.createReview(businessId, review).then(review => dispatch(receiveReview(review)))
)

export const updateReview = (businessId, review) => dispatch => (
    ReviewUtil.updateReview(businessId, review).then(review => dispatch(receiveReview(review)))
)