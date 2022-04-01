import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      circle: 'left',
      background: 'gray'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggle } = this.state;
    this.setState({ toggle: !this.state.toggle });
    if (toggle) {
      this.setState({ circle: 'left' });
      this.setState({ background: 'gray' });
    } else {
      this.setState({ circle: 'right' });
      this.setState({ background: 'green' });
    }
  }

  render() {
    if (this.state.toggle) {
      return (
        <div className='position-relative'>
          <div className='position-absolute on-circle-right' >
            <button onClick={this.handleClick} id='circle' className='right'></button>
          </div>
          <button onClick={this.handleClick} id='bg' className='green'></button>
          <span>ON</span>
        </div>

      );
    } else {
      return (
        <div className='position-relative'>
          <div className='position-absolute' >
            <button onClick={this.handleClick} id='circle'></button>
          </div>
          <button onClick={this.handleClick} id='bg'></button>
          <span>OFF</span>
        </div>

      );
    }
  }
}

export default ToggleSwitch;
