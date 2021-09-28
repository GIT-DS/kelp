import {combineReducers} from 'redux'
import businessReducer from './business_reducer';
import usersReducer from './users_reducer'

const entitiesReducer = combineReducers({
    users: usersReducer,
    businesses: businessReducer
})

export default entitiesReducer;