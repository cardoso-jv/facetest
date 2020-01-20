import React, { Component } from 'react';

class Header extends Component {


  render() {
    return (
      <header>
        <div>
          <img src="https://i.imgur.com/KDIDiSE.png"></img>
          <div>
            <span><b>Profile</b></span>
            <i className="material-icons">account_circle</i>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;