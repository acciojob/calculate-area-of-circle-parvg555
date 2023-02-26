
// Get the radius from the user using the prompt() function
let radius = prompt("Enter the radius of the circle:");

// Convert the input to a number
radius = parseFloat(radius);
const PI = Math.PI;
// Calculate the area of the circle
let area = (PI * radius * radius).toFixed(2);

// Display the result to the user
alert("The area of the circle with radius " + radius + " is " + area);