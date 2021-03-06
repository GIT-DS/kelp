import { withRouter } from "react-router";
import { connect } from "react-redux";
import React from 'react'
import { Route, Redirect } from "react-router";

const Auth = ({ component: Component, path, loggedIn, exact, history }) => {
  return (  
    <Route
      path={path}
      exact={exact}
      render={props =>
        !loggedIn ? <Component {...props} /> : <Redirect to='/' />
      }
    />

)};

const Protected = ({ component: Component, path, loggedIn, exact, history}) => (
  <Route path={path} exact={exact} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to='/login' />
    )
  )} />
);

const mapStateToProps = state => {
    return { loggedIn: Boolean(state.session.id) };
};
  
export const AuthRoute = withRouter(
    connect(
      mapStateToProps,
      null
    )(Auth)
);


export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));