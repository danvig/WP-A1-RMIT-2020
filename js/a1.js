// JAVASCRIPT FOR WB A1
// Written by: Daniel Viglietti
// Date: August 6th, 2020
// Not all code is original and resources are provided within the file
// AGE SLIDER FOR REGISTRATION PAGE
var slider = document.getElementById("myRange");
var output = document.getElementById("rangeOutput");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}