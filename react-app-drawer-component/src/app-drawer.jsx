import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    if (this.state.isClicked === false) {
      return (
      <button onClick={this.handleClick}>
        <i className='fa-solid fa-bars'></i>
      </button>
      );
    } else if (this.state.isClicked === true) {
      return (
        <div className="container">
          <div className="menu">
            <h2>Menu</h2>
            <ul>
              <li><a href="#about" onClick={this.handleClick}>About</a></li>
              <li><a href="#get-started" onClick={this.handleClick}>Get Started</a></li>
              <li><a href="#sign-in" onClick={this.handleClick}>Sign In</a></li>
            </ul>
          </div>
          <div onClick={this.handleClick} className="gray-bg"></div>
        </div>
      );
    }
  }
}

export default AppDrawer;
