// Elements
const form = document.getElementById("form");
const successPrompt = document.getElementById("successPrompt");

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent from refreshing

    form.style.display = "none";
    successPrompt.style.display = "block";
});