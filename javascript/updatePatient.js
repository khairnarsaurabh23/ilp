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
        alert('Patient details updated successfully!');
        window.location.href = "../admin/fetchPatientList.html";
    };
}

document.onload = update()