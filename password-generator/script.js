const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+[]{}<>?";

 function generatePassword() {
    let length = document.getElementById("length").value;
    let chars = upper + lower + numbers + symbols;
    let password = "";

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("password").value = password;
}
function copyPassword() {
    let passwordField = document.getElementById("password");

    navigator.clipboard.writeText(passwordField.value)
        .then(() => {
            alert("Password copied!");
        })
        .catch(err => {
            alert("Failed to copy!");
        });
}