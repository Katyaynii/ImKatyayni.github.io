document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const colorBlindButton = document.getElementById('colorBlindMode');
    const zoomInButton = document.getElementById('zoomIn');
    const zoomOutButton = document.getElementById('zoomOut');
    const showKeyboardButton = document.getElementById('showKeyboard');
    const keyboardModal = document.getElementById('keyboardModal');
    const closeButton = document.querySelector('.close');

    // Color Blind Mode
    colorBlindButton.addEventListener('click', function() {
        // Toggle color blind mode
        toggleColorBlindMode();
    });

    // Zoom In
    zoomInButton.addEventListener('click', function() {
        // Implement zoom in functionality
        zoomIn();
    });

    // Zoom Out
    zoomOutButton.addEventListener('click', function() {
        // Implement zoom out functionality
        zoomOut();
    });

    // Show On-Screen Keyboard Modal
    showKeyboardButton.addEventListener('click', function() {
        keyboardModal.style.display = 'block'; // Display the keyboard modal
    });

    // Close On-Screen Keyboard Modal
    closeButton.addEventListener('click', function() {
        keyboardModal.style.display = 'none'; // Hide the keyboard modal when the close button is clicked
    });

    // Close On-Screen Keyboard Modal when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === keyboardModal) {
            keyboardModal.style.display = 'none';
        }
    });
});

// Function to toggle color blind mode
function toggleColorBlindMode() {
    // Toggle color blind mode by changing colors of elements
    const body = document.body;
    const mainContent = document.querySelector('.main-content');
    const welcomeText = document.querySelector('.welcome-text');
    const cloudMenu = document.querySelector('.cloud-menu');
    const footer = document.querySelector('footer');

    body.classList.toggle('color-blind-mode');
    mainContent.classList.toggle('color-blind-mode');
    welcomeText.classList.toggle('color-blind-mode');
    cloudMenu.classList.toggle('color-blind-mode');
    footer.classList.toggle('color-blind-mode');
}

// Function to zoom in
function zoomIn() {
    // Increase font sizes or scale elements up
    document.body.style.fontSize = '120%';
}

// Function to zoom out
function zoomOut() {
    // Decrease font sizes or scale elements down
    document.body.style.fontSize = '80%';
}
document.addEventListener("DOMContentLoaded", function() {
    // Get the main content element
    const mainContent = document.querySelector('.main-content');
    
    // Add the 'show' class to the main content to trigger the transition effect
    mainContent.classList.add('show');
});
document.addEventListener("DOMContentLoaded", function() {
    // Get elements
    const cloudMenu = document.querySelector('.cloud-menu');
  
    // Toggle Navigation Menu
    cloudMenu.addEventListener('click', function() {
      this.classList.toggle('active');
    });
  
    // Other code remains unchanged...
  });
  