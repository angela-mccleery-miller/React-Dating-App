import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import NavigationContainer from "./navigation/navigation-container"
import Home from "./pages/home";
import About from "./pages/about";
// import UserContainerPractice from './users/user-container-practice'
// import UserDetail from "./users/user-detail";


export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* <UserContainer /> */}
        <Router>
          <div>
            <NavigationContainer />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about-us" component={About} />
              {/* <Route 
                exact path="/user/:slug" 
                component={UserDetail} 
              />   */}
            </Switch>
          </div>
        </Router>

      </div>
    );
  }
}
