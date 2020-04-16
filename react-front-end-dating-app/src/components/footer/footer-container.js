import React from 'react';
import {Link} from "react-router-dom";

export default class Footer extends Component(){   
    render(){
        return (
            <div className="footer-wrapper">    
                <h1>footer</h1>   
                {/* <div className="left-side"> 
                    <div className="links">
                        <Link exact="true" to="/">
                            Home
                        </Link>
                    </div>
                    <div className="links">
                        <Link to="/about">About</Link>
                    </div>
                </div> */}
            </div>
        );
    } 
}