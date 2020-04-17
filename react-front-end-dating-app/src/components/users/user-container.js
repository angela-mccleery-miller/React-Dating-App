import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Logo from '../../../static/assets/images/auth/hot-or-not-logo.png'
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
            <div className="userProfile-page-wrapper">
                <div className="button-wrapper">
                    <button className="btn1" onClick={() => this.handleFilter("male")}>
                        Male
          </button>
                    <button className="btn2" onClick={() => this.handleFilter("female")}>
                        Female
          </button>
                </div>
                <div className="userProfile-wrapper-wrapper">

                    {/* <div className="user-profiles-wrapper">
            <div>
              <button className="btn" onClick={() => this.handleFilter('male')}>Male</button>
              <button className="btn" onClick={() => this.handleFilter('female')}>Female</button>                                    
          </div> */}
                    {this.userProfiles()}
                </div>
                <div className='footer'>
                    <div className='footer-logo'>
                        <img src={Logo} />
                    </div>
                    <div className="links-wrapper">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                    </div>
                    <div className='copyright'>
                        <h3>Copyright message</h3>
                    </div>

                </div>
            </div>
        );
    }
}


