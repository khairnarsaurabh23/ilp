// console.log("file linked")
// const patientList = localStorage.getItem("patientList")?localStorage.getItem(JSON.parse("patientList")):[];
// let patientList;
// if(localStorage.getItem("patientList") == null){
//     patientList = []
// }
// else{
//     patientList = JSON.parse(localStorage.getItem('patientList'));
// }
const patientList = JSON.parse(localStorage.getItem("patientList"))||[];

// const patientList=localStorage.getItem("patientList");
console.log("patient list", patientList);
function PatientSignup(e,r=false){
    if(r)   e.preventDefault()
    console.log("function called")
    var patientId = document.getElementById("patientId").value;
    var patientName = document.getElementById("patientName").value;
    // var roomNo = document.getElementById("roomNo").value;
    // var doctorId = document.getElementById("doctorId").value;
    // var doctorName = document.getElementById("doctorName").value;
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
        // "roomNo":roomNo,
        // "doctorId":doctorId,
        // "doctorName":doctorName,
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
    showPopup("success", "Success:", "Patient Added Successfully")
    setInterval(()=>{
        if(r){
            window.location.href = "../admin/fetchPatientList.html"
        }
    },2000)
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