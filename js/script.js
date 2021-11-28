//FUNCTIONS

(function () {
let email = document.getElementById('email');
let submitEmail = document.getElementById('submit-button');

submitEmail.addEventListener('click',validateEmail);
email.addEventListener('input',checkIfCorrected);
})();

function validateEmail() {
    if(!email.validity.valid) errorMessage();
}

function errorMessage(){

    let emailError = document.querySelector('.email-error');
    let errorIcon = document.querySelector('.error-icon');

    emailError.classList.add('error-message-visible');
    email.classList.add('input-error-outline');
    errorIcon.classList.add('error-icon-visible');
}

function checkIfCorrected(){
    let email = document.getElementById('email');
    let emailError = document.querySelector('.email-error');
    let emailErrorVisible = document.querySelector('.error-message-visible');
    let errorIcon = document.querySelector('.error-icon');

    if (email.validity.valid && emailErrorVisible) {
        emailError.classList.remove('error-message-visible');
        email.classList.remove('input-error-outline');
        errorIcon.classList.remove('error-icon-visible');
    }
    if (email.value === '' && emailErrorVisible) {
        emailError.classList.remove('error-message-visible');
        email.classList.remove('input-error-outline');
        errorIcon.classList.remove('error-icon-visible');
    }
}

//prevent the browser from showing default error bubble / hint

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);