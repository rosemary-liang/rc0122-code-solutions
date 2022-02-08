var clicks = 0;
var $button = document.querySelector('button');
var $main = document.querySelector('main');

$button.addEventListener('click', toggleLight);

function toggleLight(event) {
  clicks++;
  var toggleStatus;
  if (clicks % 2 !== 0) {
    toggleStatus = 'turn-off';
  } else if (clicks % 2 === 0) {
    toggleStatus = 'turn-on';
  }
  $button.className = 'button ' + toggleStatus;
  $main.className = toggleStatus;
}
