function handleClick(event) {
  console.log('button clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $click = document.querySelector('button.click-button');
$click.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $mouseover = document.querySelector('button.hover-button');
$mouseover.addEventListener('mouseover', handleMouseover);

function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log('event', event);
  console.log('event.target', event.target);
}

var $doubleclick = document.querySelector('button.double-click-button');
$doubleclick.addEventListener('dblclick', handleDoubleClick);
