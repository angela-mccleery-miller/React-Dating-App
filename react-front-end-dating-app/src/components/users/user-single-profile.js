import React, { Component } from "react";

export default class ProfileItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.item.name,
      description: props.item.description,
      gender: props.item.gender,
      profileImgUrl: props.item.profileImgUrl,
      hotScore: props.item.hotScore,
      notScore: props.item.notScore
    }
  }
  render() {
    return (
      <div className='profileWithButtons'>

        <div className='profile'>
          <div className='scores'>
            <div className='hot-score'>
              {this.props.item.hotScore}
            </div>
            <div className='not-score'>
              {this.props.item.notScore}
            </div>
          </div>
          <div className='profile-img'
            style={{
              backgroundImage: `url(${this.props.item.profileImgUrl})`
            }}
          />
          <div className='name'>
            {this.props.item.name}
          </div>
          <div className='description'>
            {this.props.item.description}
          </div>
          {/* <div className='gender'>
          {this.props.item.gender}
        </div> */}
          {/* <div className='profile-img'>
          {this.props.item.profileImgUrl}
        </div> */}
        </div>
        <div className='buttons'>
          <button className='vote-button'>Hot</button>
          <button className='vote-button'>Not</button>
        </div>
      </div>
    )
  }
}