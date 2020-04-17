import React from 'react';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom";

import "../../style/about.scss"

export default function () {
    return (
        <div>
            <div className="backgroung-img-wrapper">
                About
            </div>
            <div className="content-wrapper">
                <div className="info-about-us-wrapper">
                    <div className="title-wrapper">
                        <h1>
                            Team #3
                            The Chingones!!
                        </h1>
                    </div>
                    <div className="bullets-names-wrapper">
                        <p>
                            <li>Angela Miller</li>
                            <li>Jess Larson</li>
                            <li>Jacob Archer</li>
                            <li>Edwin Tinoco</li>
                        </p>
                    </div>
                    <div className="description-wrapper">
                        <p>
                            We are Bottega School Students,
                            we're taking classes online because
                            we are in quarantined thanks to the CoronaVirus!!!
                        </p>
                    </div>
                    <div className="hot-wrapper">
                        <p>
                            We are HOT!!!
                        </p>
                    </div>
                </div>
                <div className="video-wrapper">
                    <ReactPlayer
                        url='https://www.youtube.com/watch?v=r7dZKOL5rcg'
                        className='react-player'
                        playing
                        width='100%'
                        height='500px'
                    />
                </div>
            </div>

            <div className="git-heroku-links-wrapper">
                <div className="left-column">
                    <a href="https://github.com/angela-mccleery-miller/React-Dating-App">https://github.com/angela-mccleery-miller/React-Dating-App</a>
                    <p>GitHub React Project</p>

                    <a href="https://jel-flask-dating-app-api.herokuapp.com/profiles">https://jel-flask-dating-app-api.herokuapp.com/profiles</a>
                    <p>API heroku</p>

                    <a href="https://github.com/angela-mccleery-miller/React-Dating-App">https://github.com/angela-mccleery-miller/React-Dating-App</a>
                    <p>GitHub React Project</p>
                </div>

                <div className="right-column">
                    <a href="https://jel-flask-dating-app-api.herokuapp.com/profiles">https://jel-flask-dating-app-api.herokuapp.com/profiles</a>
                    <p>API heroku</p>

                    <a href="https://github.com/angela-mccleery-miller/React-Dating-App">https://github.com/angela-mccleery-miller/React-Dating-App</a>
                    <p>GitHub React Project</p>

                    <a href="https://jel-flask-dating-app-api.herokuapp.com/profiles">https://jel-flask-dating-app-api.herokuapp.com/profiles</a>
                    <p>API heroku</p>
                </div>
            </div>
        </div>
    )
}