// get modal
// get open modal button
// get "NO" button
// function to open modal when open-modal-button is clicked
// function to close modal when "NO" button clicked

var $modal = document.querySelector('.modal-off');
var $openModalButton = document.querySelector('.open-modal-button');
var $noButton = document.querySelector('.no-button');

$openModalButton.addEventListener('click', openModal);
$noButton.addEventListener('click', closeModal);

function openModal(event) {
  $modal.className = 'modal-on';
}

function closeModal(event) {
  $modal.className = 'modal-off';
}
