import React, {Component} from 'react';
import Login from "../auth/login";
import loginImg from "../../../static/assets/images/auth/logo-1.png";

export default class Auth extends Component{
    render(){
        return(
            <div className="auth-page-wrapper">    
                <div className="login-wrapper">
                    <Login />
                </div> 

                <br/>
                <br/>
                <br/>
                <br/>
                <div className="auth-content-wrapper">
                    <div className="logo-wrapper">
                        <img src="../../../static/assets/images/auth/logo-1.png" alt="logo"/>
                    </div>

                    <div>
                        <p className="auth-message">
                            Sign in and look all our profiles and decide if their Hot or Not, <br/>
                            and if you want make a funny comment!!!<br/>
                            <br/>
                            They think they're HOt!! but they all are ugly hahahaha!!!
                        </p>
                    </div>
                    
                </div>

            </div>
        );
    }
}