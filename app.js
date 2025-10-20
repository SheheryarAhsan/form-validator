const form = document.getElementById("form");
const newPassword = document.getElementById("new-password");
const confirmPassword = document.getElementById("confirm-password");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let isMatch = false;

function validateForm() {
    // Using contraint API
    isValid = form.checkVisibility();
    // Style main message for an error
    if (!isValid) {
        message.innerText = "Please fill out all fields.";
        message.style.color = 'red';
        messageContainer.style.borderColor = "red";
        return;
    }
    // Check to see if passwords match
    if (newPassword.value === confirmPassword.value) {
        isMatch = true;
        newPassword.style.borderColor = "green";
        confirmPassword.style.borderColor = "green";
    }
    else {
        isMatch = false;
        message.innerText = "Make sure passwords match."
        message.style.color = 'red';
        messageContainer.style.borderColor = "red";
        newPassword.style.borderColor = "red";
        confirmPassword.style.borderColor = "red";
        return;
    }
    // If form is valid and passwords matches
    if (isValid && isMatch) {
        message.innerText = "Successfully Registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    validateForm();
    if (isValid && isMatch) {
        storeFormData();
    }
}

// Event Listener 
form.addEventListener("submit", processFormData);