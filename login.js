// =========================================
// NYUMBALINK v2.0
// LOGIN PAGE JAVASCRIPT
// =========================================


// Get the login form
const loginForm = document.getElementById("loginForm");

// Get form elements
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const loginMessage = document.getElementById("loginMessage");

const togglePassword = document.getElementById("togglePassword");


// =========================================
// SHOW / HIDE PASSWORD
// =========================================

togglePassword.addEventListener("click", function () {

    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        togglePassword.textContent = "Hide";

        togglePassword.setAttribute(
            "aria-label",
            "Hide password"
        );

    } else {

        passwordInput.type = "password";

        togglePassword.textContent = "Show";

        togglePassword.setAttribute(
            "aria-label",
            "Show password"
        );

    }

});


// =========================================
// CLEAR ERROR WHEN USER TYPES
// =========================================

emailInput.addEventListener("input", function () {

    emailError.textContent = "";

    loginMessage.classList.remove("show");

});


passwordInput.addEventListener("input", function () {

    passwordError.textContent = "";

    loginMessage.classList.remove("show");

});


// =========================================
// LOGIN FORM
// =========================================

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    // Clear previous messages

    emailError.textContent = "";

    passwordError.textContent = "";

    loginMessage.textContent = "";

    loginMessage.classList.remove("show");


    // Get values

    const email = emailInput.value.trim();

    const password = passwordInput.value;


    let isValid = true;


    // =====================================
    // EMAIL VALIDATION
    // =====================================

    if (email === "") {

        emailError.textContent =
            "Please enter your email address.";

        isValid = false;

    } else if (!isValidEmail(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        isValid = false;

    }


    // =====================================
    // PASSWORD VALIDATION
    // =====================================

    if (password === "") {

        passwordError.textContent =
            "Please enter your password.";

        isValid = false;

    }


    // Stop if validation failed

    if (!isValid) {
        return;
    }


    // =====================================
    // TEMPORARY LOGIN RESPONSE
    // =====================================

    /*
        IMPORTANT:

        This is NOT real authentication.

        We are only testing the frontend
        at this stage.

        Real authentication will be connected
        later using a secure backend.
    */

    loginMessage.textContent =
        "Login system is not connected yet.";

    loginMessage.classList.add("show");

});


// =========================================
// EMAIL VALIDATION FUNCTION
// =========================================

function isValidEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}
