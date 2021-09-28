import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute } from "../util/route_util";
import LandingPage from "./landing_page/landing_page";
import BusinessesContainer from "./businesses/businesses_container";
import BusinessContainer from "./businesses/business_container";
import MissingPage from "./error_page/missing";
import { Switch } from "react-router";

const App = () => (
  <div>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <Route path='/businesses/:id' component={BusinessContainer}/>
      <Route exact path='/businesses' component={BusinessesContainer}/>
      <Route exact path='/' component={LandingPage} />
      <Route component={MissingPage} />
    </Switch>
  </div>
);

export default App;