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

export const fetchAllReviews = (businessId) => dispatch => (
    ReviewUtil.fetchReviews(businessId).then(reviews => dispatch(receiveAllReviews(reviews)))
)

export const fetchReview = (reviewId) => dispatch => (
    ReviewUtil.fetchReview(reviewId).then(review => dispatch(receiveReview(review)))
)

export const createReview = (review) => dispatch => (
    ReviewUtil.createReview(review).then(review => dispatch(receiveReview(review)))
)

export const updateReview = (review) => dispatch => (
    ReviewUtil.updateReview(review).then(review => dispatch(receiveReview(review)))
)