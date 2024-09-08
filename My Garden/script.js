// script.js

// Get the water button and message area by their IDs
let waterButton = document.getElementById("water-button");
let messageArea = document.getElementById("message");

// Add an event listener to the button to listen for clicks
waterButton.addEventListener("click", function() {
    // Change the text content of the message area when the button is clicked
    messageArea.textContent = "The plants have been watered!";
});
