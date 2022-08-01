function generatePassword(passwordLenght, useUpper, useLower, useNumbers, useSpecial) {
    // Define charsets
    var charsetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var charsetLower = "abcdefghijklmnopqrstuvwxyz";
    var charsetNumbers = "0123456789";
    var charsetSpecial = "!@#$%^&*()_+~}{[]:;?><,.-=";

    // Add wanted charsets to main charset
    var charsetAll = "";

    if (useUpper == true) {
        charsetAll += charsetUpper;
    }
    if (useLower == true) {
        charsetAll += charsetLower;
    }
    if (useNumbers == true) {
        charsetAll += charsetNumbers;
    }
    if (useSpecial == true) {
        charsetAll += charsetSpecial;
    }

    // Generate random password
    var n = charsetAll.length;
    var password = "";

    for (var i = 0; i < passwordLenght; i++) {
        var randomIndex = Math.floor(Math.random() * n)
        password += charsetAll.charAt(randomIndex);
    }

    return password;
}

// Create Event Listener for checkboxes
document.getElementById("checkboxUpper").addEventListener("change", function() {
    useUpperCharacters = document.getElementById("checkboxUpper").value;
});

document.getElementById("checkboxLower").addEventListener("change", function() {
    useLowerCharacters = document.getElementById("checkboxLower").value;
});

document.getElementById("checkboxNumbers").addEventListener("change", function() {
    useNumbersCharacters = document.getElementById("checkboxNumbers").value;
});

document.getElementById("checkboxSpecial").addEventListener("change", function() {
    useSpecialCharacters = document.getElementById("checkboxSpecial").value;
});

// Create event listener for slider
document.getElementById("passwordLengthSlider").addEventListener("change", function() {
    // Get current value of slider
    var currentLenght = document.getElementById("passwordLengthSlider").value;

    // Update text
    document.getElementById("passwordLength").textContent = currentLenght;

    // Update variable
    passwordLenght_global = currentLenght;
});

// Create event listener for generate button
document.getElementById("button_generate").addEventListener("click", function() {
    // Generate password
    password_global = generatePassword(passwordLenght_global, useUpperCharacters, useLowerCharacters, useNumbersCharacters, useSpecialCharacters);

    // Set element text
    document.getElementById("passwordTextField").value = password_global;
});


// Create event listener for copy button
document.getElementById("button_copy").addEventListener("click", function() {
    navigator.clipboard.writeText(password_global);
});

// Generate random password on start
var useUpperCharacters = true;
var useLowerCharacters = true;
var useNumbersCharacters = true;
var useSpecialCharacters = true;
var passwordLenght_global = 20;
var newPassword = generatePassword(passwordLenght_global, useUpperCharacters, useLowerCharacters, useNumbersCharacters, useSpecialCharacters);
var password_global = newPassword;

document.getElementById("passwordTextField").value = newPassword;

// https://chrome.google.com/webstore/detail/ultra-password-generator/mfigcepdniddlllniijbmmekgfdcddel?hl=de
