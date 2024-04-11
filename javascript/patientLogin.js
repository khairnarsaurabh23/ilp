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
                // alert("login success")
                setInterval(()=>{
                    showPopup("success", "Success:", "Logged In successfully")
                    window.location.href = "viewPatient.html";
                },2000)
                return;
                // break;
            }
            else{
                showPopup("error", "Error:", "Wrong Password Entered")
                // alert("wrong password entered");
                return;
            }
        }
    }
    showPopup("error", "Error:", "User not found")
    // alert("user not found")
}

document.getElementById("form").addEventListener("submit", handleLogin);

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