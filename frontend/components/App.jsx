import React from "react";
import { Route } from "react-router";
import LoginFormContainer from "./session/login_form_container";
import SignupFormContainer from "./session/signup_form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LandingPage from "./landing_page/landing_page";
import LandingPageContainer from "./landing_page/landing_page_container";

import BusinessesContainer from "./businesses/businesses_container";
import BusinessContainer from "./businesses/business_container";
import MissingPage from "./error_page/missing";
import { Switch } from "react-router";
import EditReviewFormContainer from "./reviews/review_form/edit_review_form_container";
import ReviewSuggestionContainer from "./reviews/review_form/review_suggestions/review_suggestions_container";
import CreateReviewFormContainer from "./reviews/review_form/create_review_form_container";

const App = (props) => {
  return(
  <div id='appId'>
    <Switch>
      <AuthRoute path="/login" component={LoginFormContainer} />
      <AuthRoute path="/signup" component={SignupFormContainer} />
      <ProtectedRoute path='/reviews/:reviewId/edit' component={EditReviewFormContainer}/>
      <ProtectedRoute path='/reviews/:businessId/create' component={CreateReviewFormContainer}/>
      <Route path='/reviews/create/suggestions' history={props.history} component={ReviewSuggestionContainer}/>
      <Route path='/businesses?find=:find&near=:near' component={BusinessesContainer}/>
      <Route path='/businesses/:id' component={BusinessContainer}/>
      <Route exact path='/businesses' component={BusinessesContainer}/>
      <Route exact path='/' component={LandingPageContainer} />
      <Route component={MissingPage} />
    </Switch>
  </div>
  )
};

export default App;