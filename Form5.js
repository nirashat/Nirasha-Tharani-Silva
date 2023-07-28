const form =document.getElementById('form');
const company =document.getElementById('company');
const username =document.getElementById('username');
const email =document.getElementById('email');
const fName =document.getElementById('fName');
const lName =document.getElementById('lName');
const address =document.getElementById('address');
const city =document.getElementById('city');
const postal =document.getElementById('postal');
const country =document.getElementById('country');

function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input){
    formControl = input.parentElement;
    formControl.className = 'form-control success';
}

const checkEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.')
    if(dot <= atSymbol +2) return false;
    if(dot === emailVal.length -1) return false;
    return true;

}

form.addEventListener('submit', function(e){
    e.preventDefault();

    if(company.value === ''){
        showError(company, 'Company name is required');
    }else{
        showSuccess(company);
    }

    if(username.value === ''){
        showError(username, 'User name is required');
    }else{
        showSuccess(username);
    }

    if(email.value === ''){
        showError(email, 'Email is required');
    
    }else if(checkEmail(email.value)){
        showError(email, 'Email is not valid')
    }else{
        showSuccess(email);
    }

    if(fName.value === ''){
        showError(fName, 'First name is required');
    }else{
        showSuccess(fName);
    }

    if(lName.value === ''){
        showError(lName, 'Last name is required');
    }else{
        showSuccess(lName);
    }

    if(address.value === ''){
        showError(address, 'Address is required');
    }else{
        showSuccess(address);
    }

    if(city.value === ''){
        showError(city, 'City is required');
    }else{
        showSuccess(city);
    }

    if(postal.value === ''){
        showError(postal, 'ZIP Code is required');
    }else{
        showSuccess(postal);
    }

    if(country.value === ''){
        showError(country, 'Country name is required');
    }else{
        showSuccess(country);
    }
    checkEmail(email);
});