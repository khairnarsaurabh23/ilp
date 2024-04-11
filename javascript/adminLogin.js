function login(){
    var userid = document.getElementById("userid").value;
    var password = document.getElementById("password").value;

    var userid1 = localStorage.getItem(`${userid}`);
    // var password1 = localStorage.getItem("password");

    if(userid1 && userid1 == password){
        alert("Login successful");
        window.location.href = "fetchPatientList.html";
    }
    else if(!userid1){
        alert("User not found...")
    }
    else{
        alert("Password is wrong...")
    }
}