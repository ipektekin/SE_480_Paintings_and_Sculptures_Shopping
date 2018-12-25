let greenColor = "#66cc66";
let redColor = "#ff6666";
//Confirm Password
function checkPass() {
    //Store the password field objects into variables ...
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    //Store the Confimation Message Object ...
    let message = document.getElementById('confirmMessage');
    //Set the colors we will be using ...
    let greenColor = "#66cc66";
    let redColor = "#ff6666";
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
    let filter = new RegExp(/^[a-z]{1}[\d\w\.-]+@[\d\w-]{3,}\.[\w]{2,3}(\.\w{2})?$/);
    return filter.test(email);
}

function check_email() {
    let verifymessage = document.getElementById('verifyMessage');
    let enter = document.getElementById('E-mail');

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

function showForgetPasswordArea() {
    let hiddenDiv = document.getElementById("hiddenDiv");
    let forgotPasswordEmailArea = document.getElementsByName("forgetPasswordSubmit")[0]; // Buttonu aldık
    /*let enterYourEmailArea = document.getElementById("enterYourEmail"); // Email
    let enterYourUsername = document.getElementById("enterYourUsername"); // Username
    let enterYourNewPassword = document.getElementById('enterYourNewPassword'); // New Password
    let forgotPasswordEmailSubmit = document.getElementById("forgotPasswordEmailSubmit"); // Submit butonu
   */
    forgotPasswordEmailArea.onclick = function() {
       hiddenDiv.hidden= false;
    }
}

//Scrolling to Bottom
function ScrollPage(){
    var element = document.getElementsByClassName("footer")[0];
    element.scrollIntoView();
}