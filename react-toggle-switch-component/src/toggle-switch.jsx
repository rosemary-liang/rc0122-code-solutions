import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      circle: 'left',
      background: 'gray',
      switch: 'off'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { toggle } = this.state;
    this.setState({ toggle: !this.state.toggle });
    if (toggle) {
      this.setState({
        circle: 'left',
        background: 'gray',
        switch: 'off'
      });

    } else {
      this.setState({
        circle: 'right',
        background: 'green',
        switch: 'off'
      });
    }
  }

  render() {
    return (
        <div className='position-relative'>
          <div className='position-absolute on-circle-right' >
            <button onClick={this.handleClick} id='circle' className={this.state.circle}></button>
          </div>
          <button onClick={this.handleClick} id='bg' className={this.state.background}></button>
          <span>{this.switch}</span>
        </div>
    );
  }
}

export default ToggleSwitch;
