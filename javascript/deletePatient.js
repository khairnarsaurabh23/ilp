function deletePatient(index){
    console.log("delete patient connected")

    var patientList;
    if(localStorage.getItem("patientList") == null){
        patientList = []
    }
    else{
        patientList = JSON.parse(localStorage.getItem('patientList'));
    }

    patientList.splice(index, 1);

    localStorage.setItem('patientList', JSON.stringify(patientList))
    // showPatient();
}