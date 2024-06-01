const englishBtn = document.getElementById('english-btn');
const spanishBtn = document.getElementById('spanish-btn');
const heading = document.querySelector('h1');

// English and Spanish content for the heading
const englishHeading = 'What is your biggest fear?';
const spanishHeading = '¿Cual es tu peor miedo?';

// Function to set English heading
function setEnglishHeading() {
    heading.textContent = englishHeading;
}

// Function to set Spanish heading
function setSpanishHeading() {
    heading.textContent = spanishHeading;
}

// Event listeners for language switcher buttons
englishBtn.addEventListener('click', setEnglishHeading);
spanishBtn.addEventListener('click', setSpanishHeading);



// Get the input field
var inputField = document.getElementById("myInput");

// Add focus event listener to the input field
inputField.addEventListener("focus", function() {
    // Clear the placeholder text when the input field gains focus
    this.placeholder = "";
});


// Add keydown event listener to the input field
inputField.addEventListener("keydown", function(event) {
    // Check if the Enter key (key code 13) is pressed
    if (event.keyCode === 13) {
        // Prevent the default action of the Enter key (form submission)
        event.preventDefault();
        
        // Get the input value
        var inputValue = this.value;

        // Store the input value in a file (you can implement this part based on your specific requirements)
        storeInputInFile(inputValue);

        // Clear the input field after storing the value
        this.value = "";

        // Optionally, you can do any additional processing here
    }
});

// Function to store the input value in a file (you need to implement this part)
function storeInputInFile(inputValue) {
    // Here you can implement code to store the input value in a file
    // For example, you can use AJAX to send the input value to a server-side script that handles file storage
    console.log("Input value stored in file: " + inputValue);
    // Example AJAX call:
    /*
    $.ajax({
        url: "store_input.php",
        type: "POST",
        data: {input: inputValue},
        success: function(response) {
            console.log("Input value stored successfully.");
        },
        error: function(xhr, status, error) {
            console.error("Error storing input value: " + error);
        }
    });
    */
}

var inputValue = document.getElementById("myInput").value;

fetch('http://localhost:3000/store-input', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ inputValue: inputValue })
})
.then(response => response.text())
.then(data => {
    console.log(data); // Output: 'Input value stored successfully'
})
.catch(error => {
    console.error('Error:', error);
});
