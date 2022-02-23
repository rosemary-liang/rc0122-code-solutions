var $h1 = document.querySelector('h1');

var intervalID = setInterval(countdown, 1000);

function countdown() {
  if (parseInt($h1.textContent) === 4) {
    $h1.textContent = 3;
  } else if (parseInt($h1.textContent) === 3) {
    $h1.textContent = 2;
  } else if (parseInt($h1.textContent) === 2) {
    $h1.textContent = 1;
  } else if (parseInt($h1.textContent) === 1) {
    $h1.textContent = '~Earth Beeeelooowww Us~';
  } else if ($h1.textContent === '~Earth Beeeelooowww Us~') {
    stopCountdown();
  }
}

function stopCountdown() {
  clearInterval(intervalID);
  intervalID = null;
}
