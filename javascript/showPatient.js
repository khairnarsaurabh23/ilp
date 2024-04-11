const patientList = JSON.parse(localStorage.getItem("patientList"))||[];
const itemsPerPage = 5;
let currentPage = 1;
function handleSearch(){
    const elem = document.getElementById("search-input");
    const index = elem.value!=""?elem.value : 0;
    // console.log("some0", index)
    showPatient(index)
}

const clear = ()=> document.getElementById("search-input").value = ""

function showPatient(index=0){
    // let patientList;
    // if(localStorage.getItem("patientList") == null){
    //     patientList = []
    // }
    // else{
    //     const dt = localStorage.getItem('patientList');
    //     patientList = JSON.parse(dt);
    // }
    let currentPatientList = patientList;
    if(index && index>=patientList.length){
        clear()
        alert("Patient does not exist")
        index = 0;
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedPatients = index ? patientList.slice(index-1, index): patientList.slice(startIndex, endIndex);
    
    console.log("some", currentPatientList, patientList, Number(index-1), index)

    document.querySelector(".patient-table tbody").innerHTML = "";
    displayedPatients.forEach((element, ind) => {
        let html = "";
        html += "<tr>";
        html += "<td>" + (index?index:startIndex+ind+1) + "</td>";
        html += "<td>" + element.patientName + "</td>";
        html += `<td ><h2 onclick="updatePatient(${ind})" id="update" ><img src="../images/edit.png" alt=""></h2></td>`;
        html += `<td><p onclick="deletePatient(${ind})"><img src="../images/delete.png" alt=""></p></td>`;
        html += `<td onclick="add(${ind})" id="view"><a href="viewPatient.html">View</a></td>`;
        html += "</tr>";

        let cont = document.querySelector(".patient-table tbody");
        cont.innerHTML = cont.innerHTML+html;
        // stle = stle + html;
        // const elem = document.getElementById("update");
        // console.log("elem",elem)
        // document.getElementById("update").addEventListener("click", ()=>{console.log("update called"); updatePatient(index)})
    })
    renderPaginationControls();

}

function renderPaginationControls() {
    const totalPages = Math.ceil(patientList.length / itemsPerPage);
    const paginationControls = document.getElementById("paginationControls");
    paginationControls.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("button");
        pageButton.textContent = i;
        pageButton.style.marginLeft = "10px"; 
        pageButton.addEventListener("click", () => {
            currentPage = i;
            showPatient();
        });
        paginationControls.appendChild(pageButton);
    }
}

function updatePatient(index){
    localStorage.setItem("index", index);
    window.location.href = "../admin/updatePatient.html";
}

function add(ind){
    localStorage.setItem("index", ind)
}

document.onload = showPatient();