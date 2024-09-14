let counter = 0;
let multiple = 108;  // Default multiple value

const counterElement = document.getElementById('counter');
const button = document.getElementById('countButton');
const chimeSound = document.getElementById('chimeSound');
const options = document.getElementById('options');
const optionButtons = document.querySelectorAll('.optionButton');

// Handle option selection
optionButtons.forEach(optionButton => {
    optionButton.addEventListener('click', (event) => {
        multiple = parseInt(event.target.getAttribute('data-multiple'));

        // Hide the option buttons and show the start counting button
        options.style.display = 'none';
        button.style.display = 'inline-block';
    });
});

// Handle counter increment
button.addEventListener('click', () => {
    counter++;
    counterElement.textContent = counter;

    // Play sound if the counter is a multiple of the selected number
    if (counter % multiple === 0) {
        chimeSound.play();
    }
});
