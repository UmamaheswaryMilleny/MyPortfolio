function validateAndSubmit() {
    var email = document.getElementById("email").value.trim();
    var name = document.getElementById("fname").value.trim();
    var msg = document.getElementById("message").value.trim();
    var isValid = true;

    var emailRegex = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+\.([a-z]+)(\.[a-z]+)?$/;

    if (name === "") {
        alert("Please enter your name");
        isValid = false;
    } else if (email === "") {
        alert("Please enter your email");
        isValid = false;
    } else if (!emailRegex.test(email)) {
        alert("Invalid Email");
        isValid = false;
    } else if (msg === "") {
        alert("Please enter the message");
        isValid = false;
    }

    if (isValid) {
        document.getElementById("form").submit();
    }
}