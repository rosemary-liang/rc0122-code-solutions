var clicks = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', function (event) {
  clicks += 1;
  $clickCount.textContent = clicks;

  if (clicks >= 4 && clicks < 7) {
    $hotButton.className = 'hot-button cool';
  } else if (clicks >= 7 && clicks < 10) {
    $hotButton.className = 'hot-button tepid';
  } else if (clicks >= 10 && clicks < 13) {
    $hotButton.className = 'hot-button warm';
  } else if (clicks >= 13 && clicks < 16) {
    $hotButton.className = 'hot-button hot';
  } else if (clicks >= 16) {
    $hotButton.className = 'hot-button nuclear';
  }
});
