import React from 'react';
import ReactDOM from 'react-dom';

const newElement = React.createElement(
  'h1',
  null,
  'Hello, React!'
);

const div = document.querySelector('#id');

ReactDOM.render(newElement, div);
