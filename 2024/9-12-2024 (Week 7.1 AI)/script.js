// Function to convert Celsius to Fahrenheit
function convertCelsius() {
    // Get the value from the Celsius input field and convert it to a float
    const celsius = parseFloat(document.getElementById('celsiusInput').value);
    
    // Check if the input is a valid number
    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit using the formula
        const fahrenheit = (celsius * 9/5) + 32;
        
        // Display the result, removing .00 if it's a whole number
        document.getElementById('celsiusResult').innerText = 
            `${fahrenheit.toString() === '0' ? '0' : fahrenheit.toFixed(2).replace(/\.00$/, '')}°F ฟาเรนไฮต์`;
    } else {
        // If the input is not a valid number, show an error message
        document.getElementById('celsiusResult').innerText = 'กรุณาใส่ค่า'; // "Please enter a value"
    }
}

// Function to convert Meters to Centimeters
function convertMeters() {
    // Get the value from the Meters input field and convert it to a float
    const meters = parseFloat(document.getElementById('meterInput').value);
    
    // Check if the input is a valid number
    if (!isNaN(meters)) {
        // Convert Meters to Centimeters (1 meter = 100 centimeters)
        const centimeters = meters * 100;
        
        // Display the result, removing .00 if it's a whole number
        document.getElementById('meterResult').innerText = 
            `${centimeters.toString() === '0' ? '0' : centimeters.toFixed(2).replace(/\.00$/, '')}cm เซนติเมตร`;
    } else {
        // If the input is not a valid number, show an error message
        document.getElementById('meterResult').innerText = 'กรุณาใส่ค่า'; // "Please enter a value"
    }
}

// Function to convert Kilograms to Grams
function convertKilograms() {
    // Get the value from the Kilograms input field and convert it to a float
    const kilograms = parseFloat(document.getElementById('kilogramInput').value);
    
    // Check if the input is a valid number
    if (!isNaN(kilograms)) {
        // Convert Kilograms to Grams (1 kilogram = 1000 grams)
        const grams = kilograms * 1000;
        
        // Display the result, removing .00 if it's a whole number
        document.getElementById('kilogramResult').innerText = 
            `${grams.toString() === '0' ? '0' : grams.toFixed(2).replace(/\.00$/, '')}g กรัม`;
    } else {
        // If the input is not a valid number, show an error message
        document.getElementById('kilogramResult').innerText = 'กรุณาใส่ค่า'; // "Please enter a value"
    }
}