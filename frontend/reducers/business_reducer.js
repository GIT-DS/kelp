import { RECEIVE_ALL_BUSINESSES, RECEIVE_BUSINESS } from "../actions/business_actions";

const businessReducer = (state = {}, action) => {
    Object.freeze(state)
    switch(action.type){
        case RECEIVE_ALL_BUSINESSES:
            return action.businesses;
        case RECEIVE_BUSINESS:
            let newState = {}
            newState[action.business.id] = action.business
            return newState;
        default:
            return state;
    }
}

export default businessReducer;