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

form.onsubmit = function(e){
    e.preventDefault();

    if(company.value === ''){
        console.log(showError(company, 'Company name is required'));
    }else{
        console.log(showSuccess(company));
    }

    if(username.value === ''){
        console.log(showError(username, 'User name is required'));
    }else{
        console.log(showSuccess(username));
    }

    if(email.value === ''){
        console.log(showError(email, 'Email is required'));
    
    }else if(checkEmail(email.value)){
        console.log(showError(email, 'Email is not valid'));
    }else{
        console.log(showSuccess(email));
    }

    if(fName.value === ''){
        console.log(showError(fName, 'First name is required'));
    }else{
        console.log(showSuccess(fName));
    }

    if(lName.value === ''){
        console.log(showError(lName, 'Last name is required'));
    }else{
        console.log(showSuccess(lName));
    }

    if(address.value === ''){
        console.log(showError(address, 'Address is required'));
    }else{
        console.log(showSuccess(address));
    }

    if(city.value === ''){
        console.log(showError(city, 'City is required'));
    }else{
        console.log(showSuccess(city));
    }

    if(postal.value === ''){
        console.log(showError(postal, 'ZIP Code is required'));
    }else{
        console.log(showSuccess(postal));
    }

    if(country.value === ''){
        console.log(showError(country, 'Country name is required'));
    }else{
        console.log(showSuccess(country));
    }
    checkEmail(email);
    console.log("Submit form successfully reached.");

    console.log("Company: " + company);
    console.log("Username: "+username);
    console.log("Email: "+ email);
    console.log("First Name: "+fName);
    console.log("Last Name: "+lName);
    console.log("Address: "+address);
    console.log("City: "+city);
    console.log("ZIP Code: "+postal);
    console.log("Country: "+country);

};