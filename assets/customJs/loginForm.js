//Validation

function inputsValidator(event){
    event.preventDefault();
    let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    let emailValue = document.getElementById("emailInput").value;
    let passwordValue = document.getElementById("passwordInput").value;
    let invalidPassword = document.getElementById("invalidPassword");
    let invalidEmail = document.getElementById("invalidEmail");

    if(passwordValue.length < 8)
    {
        
        invalidPassword.style.display="block";
    }
    else{
        
        invalidPassword.style.display="none";
    }
    if(emailValue.match(validRegex))
        {
            invalidEmail.style.display = "none"
            return true;
        }
        else{
            invalidEmail.style.display = "block";
        }

}
