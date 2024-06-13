// Function to handle sign up button click
function handleSignUp() {
    alert("Sign Up button clicked!");
}

// Function to handle log in button click
function handleLogIn() {
    alert("Log In button clicked!");
}

// Add event listeners to the sign up and log in buttons
document.getElementById("signup").addEventListener("click", handleSignUp);
document.getElementById("login").addEventListener("click", handleLogIn);

// Function to fetch features from the backend
function fetchFeatures() {
    fetch('https://health-companion-backend.herokuapp.com/api/features') // Use the Heroku URL in production
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Update the DOM with the fetched features data
            const featuresSection = document.getElementById('features');
            featuresSection.innerHTML = ''; // Clear existing features
            data.forEach(feature => {
                const featureDiv = document.createElement('div');
                featureDiv.className = 'feature';
                featureDiv.innerHTML = `
                    <p><img src="images/${feature.name.split(' ').join('-')}-Icon.jpeg" alt="${feature.name}" width="70" height="70"><b>${feature.name}</b></p>
                `;
                featuresSection.appendChild(featureDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}

// Fetch features when the page loads
document.addEventListener("DOMContentLoaded", fetchFeatures);

// Show dropdown when Motivational Support icon is clicked
document.getElementById("motivationalSupportIcon").addEventListener("click", function() {
    var dropdown = document.getElementById("motivationalSupportDropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
});

// Handle dropdown selection
document.getElementById("motivationalSupportDropdown").addEventListener("change", function(event) {
    if (event.target.value === "coping-chronic-illness") {
        window.open("https://www.webmd.com/depression/chronic-illnesses-depression", "_blank");
    }
});
