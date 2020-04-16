import React from 'react';
import UserContainer from '../users/user-container';
import NewAccount from '../pages/create-new-account'

export default function () {
    return (

        <div className="home-content-wrapper">       
            {/* <h1>Home</h1>      */}
            

            <UserContainer />
        </div>
    );
}