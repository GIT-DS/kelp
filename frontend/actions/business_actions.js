export const RECEIVE_ALL_BUSINESSES = 'RECEIVE_ALL_BUSINESSES'
export const RECEIVE_BUSINESS = 'RECEIVE_BUSINESS'
import * as BusinessUtil from '../util/business_api_util'

const receiveAllBusinesses = businesses => ({
    type: RECEIVE_ALL_BUSINESSES,
    businesses
})

const receiveBusiness = business => ({
    type: RECEIVE_BUSINESS,
    business
})

export const fetchAllBusinesses = () => dispatch => (
    BusinessUtil.fetchBusinesses().then(businesses => dispatch(receiveAllBusinesses(businesses)))
)

export const fetchBusiness = (businessId) => dispatch => (
    BusinessUtil.fetchBusiness(businessId).then(business => dispatch(receiveBusiness(business)))
)