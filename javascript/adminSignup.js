// import showPopup from './showMessage'
// import { showPopup } from "./showMessage";
function signup(e){
    e.preventDefault()
    var form = document.getElementsByTagName("form");
    var userid = document.getElementById("userid").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var flag = true;
    // Email Validation
    if(email.indexOf('@') <= 0){
        showPopup('error', 'Error occurred:', 'Invalid @ position');
        alert("Invalid @ position")
        flag = false;
    }
    else if(email.charAt(email.length-4) != '.' && email.charAt(email.length-3) != '.'){
        showPopup('error', 'Error occurred:', '\'.\' is not present');
        // alert(". is not present")
        flag = false;
    }
    else{
        flag = true;
    }

    // Mobile Number Validation
    if(mobile.length < 10){
        showPopup('error', 'Error occurred:', 'Length of mobile no is less then 10 digits');
        // alert("Length of mobile no is less then 10 digits")
        flag = false;
    }
    else if(mobile.length > 10){
        showPopup('error', 'Error occurred:', 'Length of mobile no is greater then 10 digits');
        // alert("Length of mobile no is greater then 10 digits")
        flag = false;
    }
    else if(mobile.charAt(0) !== '7' && mobile.charAt(0) !== '8' && mobile.charAt(0) !== '9'){
        showPopup('error', 'Error occurred:', 'Enter a valid mobile number');
        // alert("Enter a valid mobile number")
        flag = false;
    }
    else{
        flag = true;
    }

    // Password Validation
    if(password.length < 8){
        showPopup('error', 'Password should be of minimum 8 characters');
        // alert("Password should be of minimum 8 characters")
        flag = false;
    }
    else{
        flag = true;
    }

    // if(flag == true){
    //     form.action = "login.html"
    // }

    if(flag == true){
        showPopup('success', 'Success:', 'Registration success, Login Now');
        localStorage.setItem(`${userid}`,password);
        setTimeout(()=>{
            window.location.href = "../admin/login.html";
        },2000)
    }
    else{
        alert("Fill correcr information")
    }
    
    // localStorage.setItem("mobile",mobile);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
}

function showPopup(status, errorMessage, message) {
    // Remove any existing popups
    const existingPopup = document.getElementById('popup');
    if (existingPopup) {
        existingPopup.remove();
    }

    // Create popup element
    const popup = document.createElement('div');
    popup.id = 'popup';
    popup.style.position = 'fixed';
    popup.style.top = '50px';
    popup.style.left = '50px';
    // popup.style.transform = 'translate(-50%, -50%)';
    popup.style.padding = '20px';
    popup.style.borderRadius = '8px';
    popup.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    popup.style.zIndex = '9999';

    // Set background color and text color based on status
    if (status === 'error') {
        popup.style.backgroundColor = '#FFCACA'; // Light red
        popup.style.color = '#FF0000'; // Red
    } else if (status === 'success') {
        popup.style.backgroundColor = '#C9FFCA'; // Light green
        popup.style.color = '#008000'; // Green
    } else {
        console.error('Invalid status');
        return; // Do nothing if status is neither error nor success
    }

    // Create and append message elements
    const errorText = document.createElement('p');
    errorText.textContent = errorMessage;
    errorText.style.marginBottom = '10px';
    popup.appendChild(errorText);

    const messageText = document.createElement('p');
    messageText.textContent = message;
    popup.appendChild(messageText);

    // Append popup to the body
    // document.body.appendChild(popup);
    document.body.insertBefore(popup, document.body.firstChild)

    // Remove the popup after a certain time (e.g., 5 seconds)
    setTimeout(() => {
        popup.remove();
    }, 5000);
}