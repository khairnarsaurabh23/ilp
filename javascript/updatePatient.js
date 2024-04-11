function update(index){
    console.log("update patient clicked")
    // window.location.href = "../admin/updatePatient.html";

    let patientList;
    let ind;
    if(localStorage.getItem("patientList") == null){
        patientList = []
    }
    else{
        patientList = JSON.parse(localStorage.getItem('patientList'));
        ind = localStorage.getItem("index")
    }

    let patient = patientList[ind]

    document.getElementById("patientId").value = patient.patientId
    document.getElementById("patientName").value = patient.patientName;
    document.getElementById("roomNo").value = patient.roomNo;
    document.getElementById("doctorId").value = patient.doctorId;
    document.getElementById("doctorName").value = patient.doctorName;
    document.getElementById("age").value = patient.age;
    document.getElementById("gender").innerText = patient.gender;
    document.getElementById("height").value = patient.height;
    document.getElementById("weight").value = patient.weight;
    // document.getElementById("bloodgrp").value = patient.bloodgrp;
    document.getElementById("address").value = patient.address;

    document.querySelector("#update-btn").onclick = function () {
        patient.patientId = document.getElementById("patientId").value;
        patient.patientName = document.getElementById("patientName").value;
        patient.roomNo = document.getElementById("roomNo").value;
        patient.doctorId = document.getElementById("doctorId").value;
        patient.doctorName = document.getElementById("doctorName").value;
        patient.age = document.getElementById("age").value;
        // patient.gender = document.querySelector('input[name="gender"]:checked').value; // Getting gender
        patient.height = document.getElementById("height").value;
        patient.weight = document.getElementById("weight").value;
        // patient.bloodgrp = document.getElementById("bloodgrp").value;
        patient.address = document.getElementById("address").value;

        // Update the patient list in localStorage
        patientList[ind] = patient;
        localStorage.setItem('patientList', JSON.stringify(patientList));
        // Optionally, provide feedback or redirect to another page
        showPopup("success", "Success:", "Patient details updated successfully")
        // alert('Patient details updated successfully!');
        window.location.href = "../admin/fetchPatientList.html";
    };
}

document.onload = update()

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