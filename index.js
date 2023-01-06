const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const number =document.getElementById('number');
const address =document.getElementById('address');

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isValidName = username => {
    var re = /^[a-zA-Z]{0,30}$/;
    return re.test(String(username).toLowerCase());
}
const isValidAddress = address => {
    var re = /^[a-zA-Z]{2,30}$/;
    return re.test(String(address).toLowerCase());
}

          



const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = number.value.trim();
    const addressValue = address.value.trim();

    if(usernameValue === '') {
        setError(username, 'Username is required');
    } else if (!isValidName(usernameValue)){
        setError(username,' Provide a valid name');

    }else{
        setSuccess(username);
    }
        
    if(emailValue === '') {
        setError(email, 'email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if(numberValue === '') {
        setError(number, 'number is required');
    } else if (numberValue.length <10 || numberValue.lenght>10) {
        setError(number, 'number must be at least 10.') 
        
    // } else if (!Validnumber(numberValue)){
    //     setError(number,'Provide a valid Phone number');
    }
    else{
        setSuccess(number);
    }
    
    // if(addressValue === '') {
    //     setError(address, 'address is required');
    // // } else if (!isValidAddress(addressValue)){
    // //     setError(address,' Provide a valid address');

    // }else{
    //     setSuccess(address);
    // }
    if(addressValue === '') {
        setError(address, 'Address is required');
    } else if (!isValidAddress(addressValue)){
        setError(address,' Provide a valid address');

    }else{
        setSuccess(address);
    }

};



