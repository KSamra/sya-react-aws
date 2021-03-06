import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import SignIn from "./containers/SignIn";
import ArtistSignUp from "./containers/ArtistSignUp";
import UploadPage from "./containers/UploadPage";
import ArtInfo from "./containers/ArtInfo";
import NotFound from "./containers/NotFound";
import AppliedRoute from "./components/AppliedRoute";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import Dashboard from "./containers/Dashboard";
import AboutUs from "./containers/AboutUs";
import ViewArt from "./containers/ViewArt";
import BusinessSignUp from "./containers/BusinessSignUp";
import SendToBusiness from "./containers/SendToBusiness";
import BusinessSubmissions from "./containers/BusinessSubmissions";
import ArtistReviews from "./containers/ArtistReviews";
import ReplySubmission from "./containers/ReplySubmission";
import ConfirmReviewRequest from "./containers/ConfirmReviewRequest";
import EditBusinessProfile from "./containers/EditBusinessProfile";
import EditArtistProfile from "./containers/EditArtistProfile";

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute 
      path="/" 
      exact 
      component={Home} 
      props={childProps} />
    <AppliedRoute 
      path="/Home" 
      exact 
      component={Home} 
      props={childProps} />
    <AppliedRoute
      path="/AboutUs"
      exact
      component={AboutUs}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/SignIn"
      exact
      component={SignIn}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/ArtistSignUp"
      exact
      component={ArtistSignUp}
      props={childProps}
    />
    <UnauthenticatedRoute
      path="/BusinessSignUp"
      exact
      component={BusinessSignUp}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/MyBusinessAccount"
      exact
      component={EditBusinessProfile}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/MyArtistAccount"
      exact
      component={EditArtistProfile}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/ConfirmReviewRequest"
      exact
      component={ConfirmReviewRequest}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/UploadPage"
      exact
      component={UploadPage}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/ArtInfo"
      exact
      component={ArtInfo}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/ViewArt"
      exact
      component={ViewArt}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/Dashboard"
      exact
      component={Dashboard}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/BusinessChoice"
      exact
      component={SendToBusiness}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/BusinessSubmissions"
      exact
      component={BusinessSubmissions}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/ArtistReviews"
      exact
      component={ArtistReviews}
      props={childProps}
    />

    <AuthenticatedRoute
      path="/ReplySubmission"
      exact
      component={ReplySubmission}
      props={childProps}
    />
    {/* Finally, catch all unmatched routes */}
    <Route component={NotFound} />
  </Switch>
);
