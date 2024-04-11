const list = localStorage.getItem("patientList")?JSON.parse(localStorage.getItem("patientList")):[];
// const list = localStorage.getItem("patientList")
// console.log("list", typeof  list)
const handleLogin = (e) => {
    e.preventDefault();
    console.log("login called")
    const userID = document.getElementById("patientID").value;
    const password = document.getElementById("password").value;
    for( l of list){
        if(l.patientId ==  userID ){
            if(l.patientPassword == password){
                localStorage.setItem("current", JSON.stringify(l))
                alert("login success")
                window.location.href = "viewPatient.html";
                return;
                // break;
            }
            else{
                alert("wrong password entered");
                return;
            }
        }
    }
    alert("user not found")
}

document.getElementById("form").addEventListener("submit", handleLogin);