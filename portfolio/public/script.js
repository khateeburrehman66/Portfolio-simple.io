const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
form.addEventListener('submit', e => {
    e.preventDefault();
    // validateInpta();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    //inputControl.classList.add('error');
    inputControl.classList.remove('success');

}
//in case of successful action
const setSuccess = (element, message) => {
    const inputControl = element.parentElement;
    // const errorDisplay = inputControl.querySelector('.error');
    // errorDisplay.innerText = message;
    inputControl.classList.add('success');
    //inputControl.classList.add('error');
    inputControl.classList.remove('error');

}
const validateInputs = () => {
    // const usenamevalue = username.value.trim();
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //}

    /*const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\',;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }*/

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\',;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    if (usernameValue === "") {
        setError(username, 'please type username');

    } else { setSuccess(username); };
    //for email validation

    if (emailValue === "") {
        setError(email, 'please type it');
    }
    else if (!isValidEmail(emailValue)) {
        setError(email, 'provide email in proper formate');
    }
    else {
        setSuccess(email);
    };
    //for password validation

    if (passwordValue === "") {
        setError(password, 'password is required');
    }
    else if (passwordValue.length < 8) {
        setError(password, 'Pasword must be at least 8 character');
    }
    else {
        setSuccess(password);
    };
    if (password2Value === "") {
        setError(password2, 'Please confirm password');
    }
    else if (password2Value !== passwordValue) {
        setError(password2, "password doesn't match");

    }
    else {
        setSuccess(password2);
    }
};
function CLR(){
    validateInputs="";
}
/*const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\',;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};*/