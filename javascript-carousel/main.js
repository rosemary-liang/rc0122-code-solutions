// set auto interval
var $images = document.querySelectorAll('img');
var $dots = document.querySelectorAll('button.dot');
var $dotButtonContainer = document.querySelector('.dot-button-container');

function stepNext() {
  toggleRight($images, 'visible', 'hidden');
  toggleRight($dots, 'dot current', 'dot');
}

function toggleRight(nodeList, current, notCurrent) {
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].className === current && nodeList[i + 1]) {
      nodeList[i + 1].className = current;
      nodeList[i].className = notCurrent;
      return;

    } else if (nodeList[i].className === current && !(nodeList[i + 1])) {
      nodeList[0].className = current;
      nodeList[i].className = notCurrent;
      return;
    }
  }
}

function toggleLeft(nodeList, current, notCurrent) {
  for (var i = 0; i < nodeList.length; i++) {
    if (nodeList[i].className === current && nodeList[i - 1]) {
      nodeList[i - 1].className = current;
      nodeList[i].className = notCurrent;
      return;

    } else if (nodeList[i].className === current && !(nodeList[i - 1])) {
      nodeList[nodeList.length - 1].className = current;
      nodeList[i].className = notCurrent;
      return;
    }
  }
}

setInterval(stepNext, 3000);

var $arrowLeft = document.querySelector('#arrow-left');
var $arrowRight = document.querySelector('#arrow-right');

function stepBack(event) {
  toggleLeft($images, 'visible', 'hidden');
  toggleLeft($dots, 'dot current', 'dot');

}

$arrowLeft.addEventListener('click', stepBack);
$arrowRight.addEventListener('click', stepNext);

function steptoDot(event) {
  if (event.target.classList.contains('dot')) {
    for (var i = 0; i < $dots.length; i++) {
      if (event.target === $dots[i]) {
        $dots[i].className = 'dot current';
        $images[i].className = 'visible';
      } else {
        $dots[i].className = 'dot';
        $images[i].className = 'hidden';
      }
    }
  }
}

$dotButtonContainer.addEventListener('click', steptoDot);
