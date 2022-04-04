import React from 'react';
class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      status: 'paused',
      iconClass: 'fa-solid fa-play'
    };

    this.handlePlayClick = this.handlePlayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
  }

  tick() {
    const seconds = this.state.timer;
    this.setState({ timer: seconds + 1 });
  }

  handlePlayClick() {
    if (this.state.status === 'paused') {
      this.setState({
        status: 'running',
        iconClass: 'fa-solid fa-pause'
      });
      this.intervalID = setInterval(() => this.tick(), 1000);

    } else if (this.state.status === 'running') {
      this.setState({
        status: 'paused',
        iconClass: 'fa-solid fa-play'
      });
      clearInterval(this.intervalID);
    }
  }

  handleResetClick() {
    if (this.state.status === 'paused') {
      this.setState({ timer: 0 });
    }
  }

  render() {
    const { timer, iconClass } = this.state;

    return (
      <div className='container'>
        <div className='row'>
          <p>{timer}</p>
          <button onClick={this.handleResetClick} className='circle'></button>
        </div>
        <div className='row'>
          <button onClick={this.handlePlayClick}>
            <i className={iconClass}></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
