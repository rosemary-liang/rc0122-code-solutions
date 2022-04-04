import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa-solid fa-x',
      errorMsg: 'A password is required'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = document.querySelector('input');
    const length = input.value.length;

    if (length === 0) {
      this.setState({
        icon: 'fa-solid fa-x',
        errorMsg: 'A password is required'
      });
    } else if (length < 8) {
      this.setState({
        icon: 'fa-solid fa-x',
        errorMsg: 'Your password is too short'
      });
    } else {
      this.setState({
        icon: 'fa-solid fa-check',
        errorMsg: ''
      });
    }
  }

  render() {
    return (
      <div>
        <div className='label'>Password</div>
        <input onInput={this.handleChange} type='password' />
        <span>
          <i className={this.state.icon}></i>
        </span>
        <p className='error-msg'>{this.state.errorMsg}</p>
      </div>

    );
  }
}

export default ValidatedInput;
