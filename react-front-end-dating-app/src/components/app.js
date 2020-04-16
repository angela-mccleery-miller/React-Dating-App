import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home";
import About from "./pages/about";
import NewAccount from './pages/create-new-account';
import LoginPractice from './pages/login-practice';
import UserDetail from "./users/user-detail";


export default class App extends Component {
  render() {
    return (
      <div className="app">

        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={About} />
              <Route path='/new-account' component={NewAccount} />
              <Route path='/login-practice' component={LoginPractice} />
              <Route
                exact path="/profile/:slug"
                component={UserDetail}
              />
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
