import React, { Component } from 'react';
import axios from 'axios';

import ProfileItem from './user-single-profile'

export default class UserContainerPractice extends Component {
  constructor() {
    super();

    this.state = {
      profile: '',
      profiles: []
    };

  }

  componentDidMount() {
    console.log('component mount')
    axios
      .get('https://jel-flask-dating-app-api.herokuapp.com/profiles')
      .then(res => {
        this.setState({
          profiles: res.data
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  renderProfiles = () => {
    return this.state.profiles.map(item => {
      return (
        <ProfileItem key={item.id} item={item} />
      )
    })
  }

  // renderProfileNames = () => {
  //   return this.state.profiles.map(item => {
  //     return (
  //       item.name
  //     )
  //   })
  // }
  // renderProfileDescriptions = () => {
  //   return this.state.profiles.map(item => {
  //     return (
  //       item.description
  //     )
  //   })
  // }
  // renderProfileGenders = () => {
  //   return this.state.profiles.map(item => {
  //     return (
  //       item.gender
  //     )
  //   })
  // }
  // renderProfileImgs = () => {
  //   return this.state.profiles.map(item => {
  //     return (
  //       item.profileImgUrl
  //     )
  //   })
  // }
  // renderProfileHotScores = () => {
  //   return this.state.profiles.map(item => {
  //     return (
  //       item.hotScore
  //     )
  //   })
  // }
  // renderProfileNotScores = () => {
  //   return this.state.profiles.map(item => {
  //     return (
  //       item.notScore
  //     )
  //   })
  // }

  render() {
    return (
      <div className='profiles'>
        {this.renderProfiles()}
      </div>
    )
  }
}
