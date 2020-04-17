import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Logo from '../../../static/assets/images/auth/hot-or-not-logo.png'


export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="navBar-wrapper">
                <div className='page-title'>
                    <h1>HOT or NOT</h1>
                </div>
                <div className='logo'>
                    <img src={Logo} />
                </div>
                <div className="links-wrapper">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                </div>
            </div>
        )
    }
}