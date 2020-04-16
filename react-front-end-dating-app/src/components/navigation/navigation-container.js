import React, { Component } from 'react';
import {NavLink} from "react-router-dom";

export default class NavigationContainer extends Component {
    constructor() {
        super();
    }

    render(){
        return(
            <div className="navBar-wrapper">
             <h1>HOT or NOT</h1>
                <button class="btn" id="maleBtn">Male</button>
                <button class="btn" id="femaleBtn">Female</button>
                <button class="btn" id="topBtn">Top Hots</button>
            </div>
        )
    }
}