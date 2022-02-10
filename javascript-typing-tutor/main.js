window.addEventListener('keydown', checkLetter);
var $spanNodeList = document.querySelectorAll('span');
var i = 0;
function checkLetter(event) {
  if (($spanNodeList[i].textContent === event.key) ||
    ($spanNodeList[i].innerHTML === '&nbsp;' && event.key === ' ')) {
    $spanNodeList[i].className = ('completed');
    var $open = document.querySelector('.open');
    if ($open !== undefined) {
      $open.className = 'current';
      i++;
    }
  } else if ($spanNodeList[i].textContent !== event.key) {
    $spanNodeList[i].classList.add('incorrect');
    i = i + 0;
  }
}
