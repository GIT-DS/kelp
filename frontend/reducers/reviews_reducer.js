import { RECEIVE_ALL_REVIEWS, RECEIVE_REVIEW, REMOVE_REVIEW_ERRORS } from "../actions/review_actions"

const reviewsReducer = (state = {} , action) =>{
    Object.freeze(state)
    let newState = Object.assign({}, state)
    switch(action.type){
        case RECEIVE_ALL_REVIEWS:
            return action.reviews
        case RECEIVE_REVIEW:
            newState[action.review.id] = action.review
            return newState
        case REMOVE_REVIEW_ERRORS:
            delete newState[action.reviewId]
            return newState
        default:
            return state;
    }
}

export default reviewsReducer