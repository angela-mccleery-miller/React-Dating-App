import React, { Component } from 'react';
import axios from 'axios';
import '../../style/new-account.scss';

export default class NewAccount extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      description: '',
      gender: '',
      profileImgUrl: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    });
  }

  handleSubmit(event) {
    axios
      .post(
        'https://jel-flask-dating-app-api.herokuapp.com/profile',
        {
          name: this.state.name,
          description: this.state.description,
          gender: this.state.gender,
          profileImgUrl: this.state.profileImgUrl,
          email: this.state.email,
          password: this.state.password,
          hotScore: '0',
          notScore: '0'
        },
      )
      .then(response => {
        console.log('Account Created')
      })
      .catch(error => {
        this.setState({
          errorText: "An error occurred"
        });
      });

    event.preventDefault();
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className='new-account-page-container'>
        <div className='new-account-container'>
          <div className='title'>
            <h1>Create New Account</h1>
          </div>
          <form onSubmit={this.handleSubmit} className='new-account-form'>
            <div className='form-item'>
              <h3 className='name'>Name: </h3>
              <input
                className='input-field'
                type="name"
                name="name"
                placeholder="Enter your full name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-item'>
              <h3 className='description'>Description: </h3>
              <input
                className='input-field'
                type="text"
                name="description"
                placeholder="Enter brief personal description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-item'>
              <h3 className='gender'>Gender: </h3>
              <input
                className='input-field'
                type="text"
                name="gender"
                placeholder="Enter male or female"
                value={this.state.gender}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-item'>
              <h3 className='profileImgUrl'>Profile Image: </h3>
              <input
                className='input-field'
                type="text"
                name="profileImgUrl"
                placeholder="Enter URL for profile image"
                value={this.state.profileImgUrl}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-item'>
              <h3 className='email'>Email: </h3>
              <input
                className='input-field'
                type="email"
                name="email"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-item'>
              <h3 className='password'>Password: </h3>
              <input
                className='input-field'
                type="password"
                name="password"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>

            <div>
              <button type="submit" className='form-button'>Create Account</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}