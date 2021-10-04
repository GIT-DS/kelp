import { withRouter } from "react-router";
import SearchBar from "./search_bar";
import { connect } from "react-redux";

export default withRouter(connect(null,null)(SearchBar))