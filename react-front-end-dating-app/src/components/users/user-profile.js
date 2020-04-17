import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {

            isHot: this.props.item.hotScore,
            isNotHot: this.props.item.notScore
        };
    }

    handleIsHot = () => {
        let scoreHot = parseInt(this.state.isHot) + 1
        fetch(
            `https://jel-flask-dating-app-api.herokuapp.com/profile/${this.props.item.id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    hotScore: scoreHot.toString(),
                    notScore: this.state.isNotHot.toString()
                })
            }
        ).then((res) => {
            this.setState({
                isHot: scoreHot.toString()
            })
        })
    }

    handleIsNotHot = () => {
        let scoreNotHot = parseInt(this.state.isNotHot) + 1
        fetch(
            `https://jel-flask-dating-app-api.herokuapp.com/profile/${this.props.item.id}`,
            {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    notScore: scoreNotHot.toString(),
                    hotScore: this.state.isHot.toString()
                })
            }
        ).then((res) => {
            this.setState({
                isNotHot: scoreNotHot.toString()
            })
        })
    }

    render() {
        const { id, name, password, description, gender, email, hotScore, notScore, profileImgUrl } = this.props.item;

        return (
            <div className="profile-item-wrapper">
                <div className="hotnothot-score-wrapper">
                    <div className='scores'>

                        <div className='score-item'>
                            <p>HOT:  {this.state.isHot}</p>
                        </div>
                        <div className='score-item'>
                            <p>NOT:  {this.state.isNotHot}</p>
                        </div>
                    </div>
                </div>

                <div className="img-profile-wrapper">
                    <div>
                        <img src={profileImgUrl} />
                    </div>
                </div>

                <div className="user-info-wrapper">
                    <div className='user-name'>
                        <h4>{name}</h4>
                    </div>
                    <div className='user-info'>
                        <p>Gender: {gender}</p>
                        <p>Email: {email}</p>
                        <p>Description: {description}</p>
                    </div>
                </div>

                <div className="btn-wrapper">
                    <button className='profile-button' onClick={this.handleIsHot}>They are HOT!</button>
                    <button className='profile-button' >View Profile</button>
                    <button className='profile-button' onClick={this.handleIsNotHot}>They are NOT!</button>
                    {/* <style>width="12" height="10"</style> */}
                </div>
            </div>

        );
    }
}















// portfolioItemClass: "",

// handleMouseEnter(){
    //     this.setState({portfolioItemClass: 'image-blur'})
    // }

    // handleMouseLeave(){
    //     this.setState({portfolioItemClass: ''})
    // }

            // <div className="portfolio-item-wrapper"
            //     onMouseEnter={() => this.handleMouseEnter()}
            //     onMouseLeave={() => this.handleMouseLeave()}            
            // >    
            //     <div
            //         className={"portfolio-img-background " + this.state.portfolioItemClass}
            //         style={{
            //             backgroundImage: "url(" + thumb_image_url + ")"
            //         }}
            //     />  

            //     <div className="img-text-wrapper">
            //         <div className="logo-wrapper">
            //             <img src={logo_url} />
            //         </div>

            //         <div className="subtitle">{description}</div>
            //     </div>
            // </div>        
