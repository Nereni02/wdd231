// Automatically add timestamp to hidden form field
const timestampField = document.getElementById("timestamp");
if (timestampField) {
timestampField.value = new Date().toISOString();
}


// Form validation
const form = document.querySelector("form");
if (form) {
form.addEventListener("submit", (e) => {
const requiredFields = form.querySelectorAll("[required]");
let valid = true;


requiredFields.forEach(field => {
if (!field.value.trim()) {
valid = false;
field.style.borderColor = "red";
} else {
field.style.borderColor = "#ccc";
}
});


if (!valid) {
e.preventDefault();
alert("Please fill out all required fields before submitting.");
}
});
}