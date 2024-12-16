// Quote function
const quotes = [
    "Do not take life too seriously. You will never get out of it alive.",
    "I'm writing a book. I've got the page numbers done.",
    "The only time to be positive you've got a clear path is when you're on the edge of a cliff.",
    "The problem with quotes on the internet is that it's hard to verify their authenticity.",
    "Behind every great man, there is a woman rolling her eyes."
];

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote-text").innerText = quotes[randomIndex];
}

// Quote function (fetches random quote from the API)
// async function getRandomQuote() {
//     try {
//         const response = await fetch('https://api.quotable.io/random');
//         const data = await response.json();
        
//         const quoteText = data.content;
//         const authorName = data.author;

//         // Display the quote and the author
//         document.getElementById("quote-text").innerHTML = `"${quoteText}" <br><strong>- ${authorName}</strong>`;
//     } catch (error) {
//         console.error('Error fetching quote:', error);
//         document.getElementById("quote-text").innerText = "Oops! Couldn't fetch a quote at the moment.";
//     }
// }

// Quote function (fetches random quote from the API)
// async function getRandomQuote() {
//     try {
//         const response = await fetch('https://api.quotable.io/random'); // New API endpoint for random quotes
//         const data = await response.json();
        
//         const quoteText = data.content;
//         const authorName = data.author;

//         // Display the quote and the author
//         document.getElementById("quote-text").innerHTML = `"${quoteText}" <br><strong>- ${authorName}</strong>`;
//     } catch (error) {
//         console.error('Error fetching quote:', error);
//         document.getElementById("quote-text").innerText = "Oops! Couldn't fetch a quote at the moment.";
//     }
// }

document.getElementById("quote-btn").addEventListener("click", getRandomQuote);

// Meme function (from imgflip API)
async function getRandomMeme() {
    try {
        const response = await fetch('https://api.imgflip.com/get_memes');
        const data = await response.json();
        const memes = data.data.memes;
        const randomMeme = memes[Math.floor(Math.random() * memes.length)];

        const memeImage = document.createElement('img');
        memeImage.src = randomMeme.url;
        memeImage.alt = randomMeme.name;
        memeImage.style.maxWidth = '100%';
        memeImage.style.height = 'auto';

        // Clear previous meme if any
        const memeContainer = document.getElementById('meme-container');
        memeContainer.innerHTML = '';
        memeContainer.appendChild(memeImage);
    } catch (error) {
        console.error('Error fetching meme:', error);
    }
}

document.getElementById("meme-btn").addEventListener("click", getRandomMeme);