import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class UserProfile extends Component{      
    constructor(props){
        super(props);

        this.state = {
            portfolioItemClass: ""
        };
    }

    // handleMouseEnter(){
    //     this.setState({portfolioItemClass: 'image-blur'})
    // }

    // handleMouseLeave(){
    //     this.setState({portfolioItemClass: ''})
    // }

    render(){    
        const {id, name, password, description, gender, email, hotScore, notScore, profileImgUrl} = this.props.item;

        return (     
            <div>
                <div className="img-profile-wrapper">
                    <img src={profileImgUrl} />
                </div>
                <div>
                    <p>{name}</p>
                </div>
            </div>   



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
        );
    }
}