// JavaScript File: Scripts/javascript.js

// Function to load a random full-screen background image
document.addEventListener("DOMContentLoaded", function() {
    var images = ["Spa_001.jpg", "Spa_002.jpg"]; // Ensure filenames match exactly
    var randomImage = images[Math.floor(Math.random() * images.length)];
    var imagePath = "Images/backgrounds/" + randomImage;
    
    // Create an image element to verify loading
    var img = new Image();
    img.src = imagePath;
    img.onload = function() {
        document.body.style.backgroundImage = 'url("' + imagePath + '")';
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    };
    img.onerror = function() {
        console.error("Failed to load background image: " + imagePath);
        document.body.style.backgroundColor = "#333"; // Fallback color
        alert("Error: Background image failed to load. Please check file paths and names.");
    };
});
