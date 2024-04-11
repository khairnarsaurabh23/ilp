function signup(){
    var form = document.getElementsByTagName("form")
    var userid = document.getElementById("userid").value;
    var mobile = document.getElementById("mobile").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var flag = true;
    // Email Validation
    if(email.indexOf('@') <= 0){
        alert("Invalid @ position")
        flag = false;
    }
    else if(email.charAt(email.length-4) != '.' && email.charAt(email.length-3) != '.'){
        alert(". is not present")
        flag = false;
    }
    else{
        flag = true;
    }

    // Mobile Number Validation
    if(mobile.length < 10){
        alert("Length of mobile no is less then 10 digits")
        flag = false;
    }
    else if(mobile.length > 10){
        alert("Length of mobile no is greater then 10 digits")
        flag = false;
    }
    else if(mobile.charAt(0) !== '7' && mobile.charAt(0) !== '8' && mobile.charAt(0) !== '9'){
        alert("Enter a valid mobile number")
        flag = false;
    }
    else{
        flag = true;
    }

    // Password Validation
    if(password.length < 8){
        alert("Password should be of minimum 8 characters")
        flag = false;
    }
    else{
        flag = true;
    }

    if(flag == true){
        form.action = "login.html"
    }

    if(flag == true){
        localStorage.setItem(`${userid}`,password);
        window.location.href = "../admin/login.html";
    }
    else{
        alert("Fill correcr information")
    }
    
    // localStorage.setItem("mobile",mobile);
    // localStorage.setItem("email",email);
    // localStorage.setItem("password",password);
}