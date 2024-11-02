// Add event listener to the button
document
    .getElementById("calculateButton")
    .addEventListener("click", calculateSum);

function calculateSum() {
    // Get values from input fields
    const num1 = Number(document.getElementById("num1").value); // Potential bug: Value is a string
    const num2 = Number(document.getElementById("num2").value); // Potential bug: Value is a string

    // Log values to the console for debugging
    console.log("Num1:", num1, "Num2:", num2);

    // Try to add the numbers
    const sum = num1 + num2; // Potential bug: Concatenation instead of addition

    // Display result
    document.getElementById("result").innerHTML = "Sum: " + sum;

    // Uncomment the following line to introduce an error
    // console.log(undefinedVariable); // Example of a runtime error
}
