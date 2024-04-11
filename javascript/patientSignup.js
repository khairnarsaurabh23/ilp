console.log("file linked")
// const patientList = localStorage.getItem("patientList")?localStorage.getItem(JSON.parse("patientList")):[];
var patientList;
if(localStorage.getItem("patientList") == null){
    patientList = []
}
else{
    patientList = JSON.parse(localStorage.getItem('patientList'));
}

// const patientList=localStorage.getItem("patientList");
console.log("patient list", patientList);
function PatientSignup(){
    console.log("function called")
    var patientId = document.getElementById("patientId").value;
    var patientName = document.getElementById("patientName").value;
    var roomNo = document.getElementById("roomNo").value;
    var doctorId = document.getElementById("doctorId").value;
    var doctorName = document.getElementById("doctorName").value;
    var age = document.getElementById("age").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    var bloodGrp = document.getElementById("bloodGrp").value;
    var address = document.getElementById("address").value;
    var patientPassword = document.getElementById("patientPassword").value;

    const patient = {
        "patientId":patientId,
        "patientName":patientName,
        "roomNo":roomNo,
        "doctorId":doctorId,
        "doctorName":doctorName,
        "age":age,
        "gender":gender,
        "height":height,
        "weight":weight,
        "bloodGrp":bloodGrp,
        "address":address,
        "patientPassword":patientPassword
    }

    patientList.push(patient);
    localStorage.setItem("patientList",JSON.stringify(patientList));
    console.log("patient list ", patientList);


//     localStorage.setItem("patientId", patientId);
//     localStorage.setItem("patientName", patientName);
//     localStorage.setItem("roomNo", roomNo);
//     localStorage.setItem("doctorId", doctorId);
//     localStorage.setItem("doctorName", doctorName);
//     localStorage.setItem("age", age);
//     localStorage.setItem("gender", gender);
//     localStorage.setItem("height", height);
//     localStorage.setItem("weight", weight);
//     localStorage.setItem("bloodGrp", bloodGrp);
//     localStorage.setItem("address", address);
//     localStorage.setItem("patientPassword", patientPassword);
}