import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BaseRouter from "./routes";
import ProfilePage from "./ProfilePage";
import HomePage from "./HomePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/profile-page/:id" component={ProfilePage}></Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
