import React from "react";
import "./App.css";
import Navbar from "./Components/Layout/Navbar";
import Alert from "./Components/Layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/Pages/About";
import NotFound from "./Components/Pages/NotFound";

import User from "./Components/Users/User";
import GithubState from "./Context/Github/GithubState";
import AlertState from "./Context/Alert/AlertState";
import Home from "./Components/Pages/Home";

const App = () => {
  // const { users, loading, user, repos, alert } = this.state;
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
