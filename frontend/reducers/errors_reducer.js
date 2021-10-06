import {combineReducers} from 'redux'
import reviewErrorsReducer from './review_errors_reducer'
import sessionErrorsReducer from './session_errors_reducer'

const errorsReducer = combineReducers({
    sessionErrors: sessionErrorsReducer,
    reviewErrors: reviewErrorsReducer
})

export default errorsReducer