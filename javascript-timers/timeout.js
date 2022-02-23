var $h1 = document.querySelector('h1');

var timeout = setTimeout(function () {
  ($h1.textContent = 'Hello There');
}, 2000);

timeout();
