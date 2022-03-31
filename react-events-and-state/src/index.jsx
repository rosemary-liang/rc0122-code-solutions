// import react
// create class (no constructor yet) with render object
// mount with reactDOM.render
// set initial state using constructor
// add method to change state (handleClick, setState)
// bind method in constructor (this.handleClick = this.handleClick.bind(this))
// in component render method, set up ? : to render different button depending on state

import React from 'react';
import reactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isClicked ? 'Click Me!' : 'Thanks!'}
      </button>
    );
  }

}

reactDOM.render(<CustomButton />, document.querySelector('#root'));
