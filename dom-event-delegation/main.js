var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', function (event) {
  console.log('event.target:', event.target);
  console.log('event.target.tagName:', event.target.tagName);

  if (event.target && event.target.matches('button')) {
    var $closest = event.target.closest('.task-list-item');
    console.log('task-list-item:', $closest);
    $closest.remove();

  }
});
