var greenColor = "#66cc66";
var redColor = "#ff6666";
//Confirm Password
function checkPass() {
    //Store the password field objects into variables ...
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');
    //Store the Confimation Message Object ...
    var message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    var greenColor = "#66cc66";
    var redColor = "#ff6666";
    //Compare the values in the password field 
    //and the confirmation field
    if (password.value == confirmPassword.value) {
        //The passwords match. 
        //Set the color to the green color and inform
        //the user that they have entered the correct password 
        confirmPassword.style.backgroundColor = greenColor;
        message.style.color = greenColor;
        message.innerHTML = "Passwords Match!";
    } else {
        //The passwords do not match.
        //Set the color to the red color and
        //notify the user.
        confirmPassword.style.backgroundColor = redColor;
        message.style.color = redColor;
        message.innerHTML = "Passwords Do Not Match!";

    }
}
// E-mail Validation
function Verify_email(email) {
    //Regular expression checks mail.
    var filter = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
    return filter.test(email);
}

function check_email() {
    var verifymessage = document.getElementById('verifyMessage');
    var enter = document.getElementById('E-mail');

    if (!Verify_email(enter.value)) {
        enter.style.backgroundColor = redColor;
        verifymessage.style.color = redColor;
        verifymessage.innerHTML = "Invalid e-mail address";
    } else {
        verifymessage.innerHTML = "Valid e-mail address"
        verifymessage.style.color = greenColor;
        enter.style.backgroundColor = "green";
    }
}