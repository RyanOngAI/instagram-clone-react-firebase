import React from "react";
import { Route } from "react-router-dom";

import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

const BaseRouter = () => (
  <div>
    <Route exact path="/profile-page" component={ProfilePage} />
    <Route exact path="/" component={HomePage} />
  </div>
);

export default BaseRouter;
