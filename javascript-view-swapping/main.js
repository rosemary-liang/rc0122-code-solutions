var $tabContainer = document.querySelector('.tab-container');
var $tabNodeList = document.querySelectorAll('.tab');
var $viewNodeList = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {
  if (event.target.className !== 'tab') {
    return;
  }

  for (var tabIndex = 0; tabIndex < $tabNodeList.length; tabIndex++) {
    if ($tabNodeList[tabIndex] === event.target) {
      $tabNodeList[tabIndex].className = 'tab active';
    } else {
      $tabNodeList[tabIndex].className = 'tab';
    }
  }

  var $dataView = event.target.getAttribute('data-view');
  for (var viewIndex = 0; viewIndex < $viewNodeList.length; viewIndex++) {
    if ($viewNodeList[viewIndex].getAttribute('data-view') === $dataView) {
      $viewNodeList[viewIndex].className = 'view';
    } else {
      $viewNodeList[viewIndex].className = 'view hidden';
    }
  }

});
