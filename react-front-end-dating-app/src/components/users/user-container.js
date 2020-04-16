import React, { Component } from "react";
import axios from "axios";

import UserProfile from "./user-profile";

export default class UserContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to The Hot App",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter((item) => {
        return item.gender === filter;
      }),
    });
  }

  getUserProfiles() {
    axios
      .get("https://jel-flask-dating-app-api.herokuapp.com/profiles")
      .then((response) => {
        console.log("response data", response);
        this.setState({
          data: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  userProfiles() {
    return this.state.data.map((item) => {
      console.log(item);
      return <UserProfile key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getUserProfiles();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="userProfile-buttons">
        <button className="btn1" onClick={() => this.handleFilter("male")}>
          Male
        </button>
        <button className="btn2" onClick={() => this.handleFilter("female")}>
          Female
        </button>

        {this.userProfiles()}
      </div>
    );
  }
}
