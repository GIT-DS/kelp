import { connect } from "react-redux";
import BusinessBox from "./business_box";
import { withRouter } from "react-router";

export default withRouter(connect(null, null)(BusinessBox))