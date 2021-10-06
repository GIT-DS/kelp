import { connect } from "react-redux"
import { withRouter } from "react-router"
import LandingPage from "./landing_page"
import { fetchAllBusinesses } from "../../actions/business_actions"

const mapStateToProps = state => ({
    businesses: Object.values(state.entities.businesses)
})

const mapDispatchToProps = dispatch => ({
    fetchAllBusinesses: () => dispatch(fetchAllBusinesses())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage))