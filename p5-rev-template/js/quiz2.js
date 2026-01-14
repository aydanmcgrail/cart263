
"use strict";

function setup() {
    console.log("go")
    createCanvas(1200, 800);
}

function draw() {
    background("yellow");

    noStroke();

    drawEllipse("blue", 80, 80, 100);
    drawEllipse("red", 280, 190, 200);
    drawEllipse("green", 650, 420, 400);
}

function drawEllipse(f, x, y, size) {
    push();
    noStroke();
    fill(f);
    ellipse(x, y, size);
    pop();
}