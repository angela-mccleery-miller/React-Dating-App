import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class UserProfile extends Component{      
    constructor(props){
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
                headers: {"Content-Type": "application/json"},
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
                headers: {"Content-Type": "application/json"},
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

    render(){    
        const {id, name, password, description, gender, email, hotScore, notScore, profileImgUrl} = this.props.item;

        return (     
            <div className="user-profile-wrapper">
                <div className="hotnothot-score-wrapper">
                    <div>
                        <p>Hot:  {this.state.isHot}</p>
                    </div>
                    <div>
                        <p>not Hot:  {this.state.isNotHot}</p>
                    </div>
                </div>

                <div className="img-profile-wrapper">
                    <div>
                        <img src={profileImgUrl} />
                    </div>                    
                </div>

                <div className="user-info-wrapper">
                    <div className="name">
                        <p>{name}</p>
                    </div>
                    <div>
                        <p>Gender: {gender}</p>
                    </div>
                    <div>
                        <p>Email: {email}</p>
                    </div>
                    <div>
                        <p>Description: {description}</p>   
                    </div>
                </div>

                <div className="btn-wrapper">
                    <div>
                        <button onClick={this.handleIsHot}>Is hot!!</button>
                    </div>
                    <div>
                        <button onClick={this.handleIsNotHot}>Is NOt hot!!</button>
                    </div>
                    <div>
                        <button>View Profile</button>
                    </div>
                    
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
        