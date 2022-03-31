import React from 'react';
import ReactDOM from 'react-dom';

function CustomButton(props) {
  return <button>Click me!</button>;
}

const element = <CustomButton />;
const root = document.querySelector('#root');
ReactDOM.render(element, root);
