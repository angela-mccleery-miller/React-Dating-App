import React from 'react';
import UserContainer from '../users/user-container';

import '../../style/main.scss';

import NewAccount from '../pages/create-new-account'

export default function () {
    return (
        <div className="home"> 
            {/* <button id="homeButton">Home</button>      */}

        <div className="home-content-wrapper">       
            <button id="homeButton" type="button">Home</button>     

           <UserContainer />
        </div>
      </div>
    );
}