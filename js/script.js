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

    emailError.classList.add('error-message-visible');
}

function checkIfCorrected(){
    let email = document.getElementById('email');
    let emailError = document.querySelector('.email-error');
    let emailErrorVisible = document.querySelector('.error-message-visible');

    if (email.validity.valid && emailErrorVisible) {
        emailError.classList.remove('error-message-visible');
    }
    if (email.value === '' && emailErrorVisible) {
        emailError.classList.remove('error-message-visible');
    }
}

//prevent the browser from showing default error bubble / hint

document.addEventListener('invalid', (function(){
    return function(e) {
      e.preventDefault();
    };
})(), true);