import React, {Component} from 'react';
import axios from "axios";

export default class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            errorText: ""
        };

        this.users = [{email: "captainjack@gmail.com", password: "blackpearl"}]

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        });
    }

    handleSubmit(){
        this.users.map(user => {
            if ((user.email === this.state.email) && (user.password === this.state.password)){
                this.setState({
                    errorText: "encontrado"
                }) ;
            }else{
                this.setState({
                    errorText: "The email or password are incorrect or doesn't exist"
                }) 
            }
        })
    }

    // client = request.json["client"]
    // client["email"]
    // email = requeast.json["email"] .query.get(email)
    // pw = requeast.json["password"]
    // { "status": "created"}

    render(){
        return(
            <div>             
                <div className="form-wrapper">                   
                    <div>
                        <input 
                            type="email"
                            name="email"
                            placeholder="Your email" 
                            value={this.state.email}
                            onChange={this.handleChange}                           
                        />
                    </div>
                    
                    <div>
                        <input 
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>                    

                    <div>
                        <button type="button" onClick={this.handleSubmit}>Login</button>
                    </div>
                </div>   
                <p className="login-message">{this.state.errorText}</p>
            </div>                 
        );
    }
}