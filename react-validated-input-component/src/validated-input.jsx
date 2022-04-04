import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'fa-solid fa-x',
      spanColor: 'red',
      errorMsg: 'A password is required',
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const input = event.target.value;
    const length = event.target.value.length;

    if (length === 0) {
      this.setState({
        icon: 'fa-solid fa-x',
        spanColor: 'red',
        errorMsg: 'A password is required',
        value: input
      });
    } else if (length < 8) {
      this.setState({
        icon: 'fa-solid fa-x',
        spanColor: 'red',
        errorMsg: 'Your password is too short',
        value: input
      });
    } else {
      this.setState({
        icon: 'fa-solid fa-check',
        spanColor: 'green',
        errorMsg: '',
        value: input
      });
    }
  }

  render() {
    return (
      <div>
        <div className='label'>Password</div>
        <input onChange={this.handleChange} type='password' value={this.state.value}/>
        <span className={this.state.spanColor}>
          <i className={this.state.icon}></i>
        </span>
        <p className='error-msg'>{this.state.errorMsg}</p>
      </div>
    );
  }
}

export default ValidatedInput;
