// Get references to the HTML elements
const memeImage = document.getElementById('meme-image');
const generateButton = document.getElementById('generate-button');
const cooldownTimer = document.getElementById('cooldown-timer');

// Initialize the cooldown interval
let cooldownInterval;

// Function to fetch a random meme from the Reddit API
function fetchRandomMeme() {
    // Fetch a random meme from the r/memes subreddit
    fetch('https://www.reddit.com/r/memes/random.json')
        .then(response => response.json())
        .then(data => {
            // Get the URL of the meme image
            const memeUrl = data[0].data.children[0].data.url;

            // Set the src attribute of the meme image to the fetched URL
            memeImage.src = memeUrl;
        })
        .catch(error => {
            // Log any errors that occur during the fetch request
            console.error('Error fetching random meme:', error);
        });
}

// Function to start the cooldown timer
function startCooldown() {
    // Set the initial cooldown time to 5 seconds
    let cooldownSeconds = 5;

    // Update the cooldown timer text
    cooldownTimer.textContent = `Cooldown: ${cooldownSeconds} seconds`;

    // Disable the generate button during the cooldown period
    generateButton.disabled = true;

    // Start the cooldown interval
    cooldownInterval = setInterval(() => {
        // Decrement the cooldown time
        cooldownSeconds--;

        // Update the cooldown timer text
        cooldownTimer.textContent = `Cooldown: ${cooldownSeconds} seconds`;

        // If the cooldown time has reached 0, clear the interval and enable the button
        if (cooldownSeconds === 0) {
            clearInterval(cooldownInterval);
            generateButton.disabled = false;
            cooldownTimer.textContent = '';
        }
    }, 1000);
}

// Add a click event listener to the generate button
generateButton.addEventListener('click', () => {
    // Fetch a new random meme and start the cooldown timer
    fetchRandomMeme();
    startCooldown();
});

// Fetch the first random meme when the page loads
fetchRandomMeme();
