username = document.getElementById("username")
usernameError = document.getElementById("usernameError")
email = document.getElementById("email")
emailError = document.getElementById("emailError")
password = document.getElementById("password")
passwordError = document.getElementById("passwordError")
confirmPassword = document.getElementById("confirmPassword")
confirmPasswordError = document.getElementById("confirmPasswordError")
submitButton = document.getElementById("submitButton")


// Username input
username.addEventListener('input', (event) => {
    if (username.validity.valueMissing) {
        usernameError.textContent = "Username cannot be blank"
    } else {
        usernameError.textContent = ""
    }
})

username.addEventListener('blur', (event) => {
    if (username.validity.valueMissing) {
        usernameError.textContent = "Username cannot be blank"
    } else {
        usernameError.textContent = ""
    }
})


// Email input
email.addEventListener('input', (event) => {
    if (email.validity.valueMissing) {
        emailError.textContent = "Email cannot be blank"
    } else {
        emailError.textContent = ""
    }
})

email.addEventListener('blur', (event) => {
    if (email.validity.valueMissing) {
        emailError.textContent = "Email cannot be blank"
    } else {
        emailError.textContent = ""
    }
})


//  Submit button listener
submitButton.addEventListener('click', (event) => {
    alert('button clicked')
    event.preventDefault()
    alert('default prevented')
    if (username.validity.valueMissing) {
        alert('if is TRUE')
        usernameError.textContent = "Username cannot be blank"
        return
    }
    alert('past if statement')
})























