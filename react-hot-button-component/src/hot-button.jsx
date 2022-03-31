import React from 'react';

class HotButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    let clickClass;
    const { clicks } = this.state;
    if (clicks <= 3) {
      clickClass = 'three-clicks';
    } else if (clicks <= 6) {
      clickClass = 'six-clicks';
    } else if (clicks <= 9) {
      clickClass = 'nine-clicks';
    } else if (clicks <= 12) {
      clickClass = 'twelve-clicks';
    } else if (clicks <= 15) {
      clickClass = 'fifteen-clicks';
    } else {
      clickClass = 'eighteen-clicks';
    }
    // console.log('State:', this.state);

    return (
      <button onClick={this.handleClick} className={clickClass} >Hot Button</button>
    );
  }

}

export default HotButton;
