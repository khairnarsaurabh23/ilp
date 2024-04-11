window.onload = function(){
    console.log("view details")
    var patientId = document.getElementById("patientId");
    var patientName = document.getElementById("patientName");
    var roomNo = document.getElementById("roomNo");
    var doctorId = document.getElementById("doctorId");
    var doctorName = document.getElementById("doctorName");
    var age = document.getElementById("age");
    // var gender = document.querySelector('input[name="gender"]:checked');
    let gender = document.getElementById('gender');
    var height = document.getElementById("height");
    var weight = document.getElementById("weight");
    var bloodGrp = document.getElementById("bloodgrp");
    var address = document.getElementById("address");
    let userId = document.getElementById("userId");

    const ind = localStorage.getItem("update")
    const current = JSON.parse(localStorage.getItem("patientList"))[ind];

    patientId.value = current.patientId;
    patientName.value = current.patientName;
    roomNo.value = current.roomNo;
    doctorId.value = current.doctorId;
    doctorName.value = current.doctorName;
    age.value = current.age;
    gender.innerText = current.gender;
    height.value = current.height;
    weight.value = current.weight;
    bloodGrp.innerText = current.bloodGrp;
    address.value = current.address;
    // userId.value = current.userId;  

    patientId.disabled = true
    patientName.disabled = true
    roomNo.disabled = true
    doctorId.disabled = true
    doctorName.disabled = true
    age.disabled = true
    gender.disabled = true
    height.disabled = true
    weight.disabled = true
    bloodGrp.disabled = true
    address.disabled = true
}
