import React, { Component } from 'react';
import axios from 'axios';

import '../../style/login-styles.scss'

export default class LoginPractice extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: "",
      password: "",
      errorColor: 'white'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFail = this.handleFail.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorColor: 'white'
    });
  }

  handleFail() {
    this.setState({
      errorColor: 'red'
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    axios
      .get(
        'https://jel-flask-dating-app-api.herokuapp.com/profiles',
      )
      .then(response => {
        let profileArray = response.data
        profileArray.forEach(p => {
          if (this.state.email === p.email) {
            if (this.state.password === p.password) {
              this.props.history.push('/')
            } else {
              console.log('failed')
              this.handleFail()
            }
          } else {
            console.log('not a match')
            this.handleFail()
          }
        })

      })
  }

  render() {
    return (
      <div className='login-page'>
        <div className='login-container'>

          <div className='title'>
            <h1>LOGIN TO YOUR ACCOUNT</h1>
          </div>

          <div>{this.state.errorText}</div>

          <form onSubmit={this.handleSubmit} className='login-form'>
            <div className='form-item'>
              <div className='email-title'>
                <h3>Email:</h3>
              </div>
              <input
                className='input-field'
                type="email"
                name="email"
                placeholder="Your email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-item'>
              <div className='password-title'>
                <h3>Password:</h3>
              </div>
              <input
                className='input-field'
                type="password"
                name="password"
                placeholder="Your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div className='form-button-container'>
              <button type="submit" className='form-button'>LOGIN</button>
            </div>
            <div className='incorrect-message' style={{
              color: `${this.state.errorColor}`
            }}>
              <h4>USERNAME OR PASSWORD IS INCORRECT</h4>
            </div>
            <div>
              <h1>OR...</h1>
              <button className='new-account-button'
                onClick={e => { this.props.history.push('/new-account') }}>
                CREATE NEW ACCOUNT
                </button>
            </div>
          </form>
        </div>
      </div>
    );

  }
}