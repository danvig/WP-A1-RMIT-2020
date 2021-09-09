// JAVASCRIPT FOR SITE LOGO
// Written by: Daniel Viglietti
// Date: August 10th, 2020
// Not all code is original and resources are provided within the file

// Code from here and index.html sourced from
// https://www.w3schools.com/html/html5_canvas.asp

var canvas = document.getElementById('canvas');

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
}

ctx.fillStyle = "#FFFFFF";

// Left Edge
ctx.strokeRect(12, 50, 10, 10);
ctx.fillRect(12, 50, 10, 10);

// Left Small
ctx.strokeRect(30, 40, 10, 30);
ctx.fillRect(30, 40, 10, 30);

// Left Medium
ctx.strokeRect(50, 30, 10, 50);
ctx.fillRect(50, 30, 10, 50);

// Center
ctx.strokeRect(70, 50, 100, 10);
ctx.fillRect(70, 50, 100, 10);

// Right Medium
ctx.strokeRect(180, 30, 10, 50);
ctx.fillRect(180, 30, 10, 50);

// Right Small
ctx.strokeRect(200, 40, 10, 30);
ctx.fillRect(200, 40, 10, 30);

// Right Edge
ctx.strokeRect(218, 50, 10, 10);
ctx.fillRect(218, 50, 10, 10);

// Text
ctx.font = "30px 'Geneva";
ctx.fillText("ADRENALINE BUZZ CLUB", 240, 66);