// script.js

// Get references to elements
const revealButton = document.getElementById('revealButton');
const letterParts = document.querySelectorAll('.letter');
const backgroundMusic = document.getElementById('backgroundMusic');

let currentPart = 0;

// Start playing background music
backgroundMusic.play();

// Add event listener to the button
revealButton.addEventListener('click', function () {
    if (currentPart < letterParts.length) {
        // Reveal the next part of the letter
        letterParts[currentPart].classList.add('visible');
        currentPart++;

        // Update button text
        if (currentPart < letterParts.length) {
            revealButton.textContent = `Click to Reveal Part ${currentPart + 1} ✨`;
        } else {
            revealButton.textContent = "Your Message is Fully Revealed! ❤️";
            revealButton.disabled = true;
        }
    }
});

// Pause and resume music on hover over the button
revealButton.addEventListener('mouseover', () => {
    backgroundMusic.volume = 0.7; // Lower the volume when hovering
});

revealButton.addEventListener('mouseout', () => {
    backgroundMusic.volume = 1; // Restore full volume
});