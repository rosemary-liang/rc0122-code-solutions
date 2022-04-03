import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      isClicked: false,
      iconClass: 'fa-solid fa-play'
    };

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  tick() {
    let seconds = this.state.timer;
    this.setState({ timer: seconds++ });
  }

  handleClass() {
    if (this.state.isClicked) {
      this.setState({ iconClass: 'fa-solid fa-pause' });
    } else {
      this.setState({ iconClass: 'fa-solid-fa-play' });
    }

  }

  handleInterval() {
    if (this.state.isClicked) {
      this.intervalID = setInterval(() => this.tick, 1000);
    } else {
      clearInterval(this.intervalID);
    }
  }

  handlePlayClick() {
    this.setState({ isClicked: !this.state.isClicked });
    this.handleClass();
    this.handleInterval();
  }

  handleResetClick() {
    if (!this.state.isClicked) {
      this.setState({ timer: 0 });
    }
  }

  render() {
    // console.log('state:', this.state);
    const { timer, iconClass } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <p>{timer}</p>
          <button onClick={this.handlePlayClick} className='circle'></button>
        </div>
        <div className='row'>
          <button onClick={this.handleResetClick}>
            <i className={iconClass}></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
