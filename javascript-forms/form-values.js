var $submit = document.querySelector('#contact-form');
$submit.addEventListener('submit', function (event) {
  event.preventDefault();

  var submittedValues = {};

  submittedValues.name = $submit.elements.name.value;
  submittedValues.email = $submit.elements.email.value;
  submittedValues.message = $submit.elements.message.value;

  console.log(submittedValues);
  $submit.reset();
});
