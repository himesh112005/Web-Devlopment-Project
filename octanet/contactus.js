// script.js

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Your form submission logic (e.g., sending data to a server) goes here

    // Show confirmation message
    document.getElementById("confirmation").classList.remove("hidden");
});
