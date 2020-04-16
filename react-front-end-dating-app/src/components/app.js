import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';


import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import Auth from "./pages/auth";
import About from "./pages/about";
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
              <Route 
                path="/auth" 
                render={props => (
                  <Auth
                    {...props}
                    handleSuccessfulLogin={this.handleSuccessfulLogin}
                    handleUnSuccessfulLogin={this.handleUnSuccessfulLogin} 
                  />
                )}
              /> 
              <Route path="/about" component={About} />   
              <Route 
                exact path="/profile/:slug" 
                component={UserDetail} 
              />            
            </Switch>   

            {/* <Footer />        */}
          </div>         
        </Router>
        
      </div>
    );
  }
}
