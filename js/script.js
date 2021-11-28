const email = document.getElementById('mail');
const emailError = document.getElementById('email-error');
const form  = document.getElementsByTagName('form')[0];
const submitButton = document.getElementById('submit-button');
const errorIcon = document.getElementById('error-icon');

email.addEventListener('input', function (event) {
    // Each time the user types something, we check if the
    // form fields are valid.
  
    if (email.validity.valid) {
      // In case there is an error message visible, if the field
      // is valid, we remove the error message.
      emailError.textContent = ''; // Reset the content of the message
      emailError.className = 'error'; // Reset the visual state of the message
      submitButton.classList.remove('submit-button-activated');
      errorIcon.classList.remove('error-icon-visible');
    } else {
      // If there is still an error, show the correct error
      showError();
    }

  });

form.addEventListener('submit', function (event) {
    // if the email field is valid, we let the form submit
  
    if(!email.validity.valid) {
      // If it isn't, we display an appropriate error message
      showError();
      // Then we prevent the form from being sent by canceling the event
      event.preventDefault();
    }

  });
  
  function showError() {
    if(email.validity.valueMissing) {
      // If the field is empty,
      // display the following error message.
      emailError.textContent = 'You need to enter an e-mail address.';
    } else if(email.validity.typeMismatch) {
      // If the field doesn't contain an email address,
      // display the following error message.
      emailError.textContent = 'Please provide a valid email';
    } else if(email.validity.tooShort) {
      // If the data is too short,
      // display the following error message.
      emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
    }
    submitButton.classList.add('submit-button-activated');
    errorIcon.classList.add('error-icon-visible');
}