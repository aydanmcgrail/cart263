"use strict";

let counter = 0;
let ellipseAlpha = 255;

let square1 = {
    x: 75,
    y: 75,
    size: 100,
}

let square2 = {
    x: 200,
    y: 75,
    size: 100,
}
let fillBase1 = [20, 20, 255];
let fillNoOverlap1 = [20, 20, 255];
let fillOverlap1 = [150, 150, 255];

let fillBase2 = [255, 0, 0];
let fillNoOverlap2 = [255, 0, 0];
let fillOverlap2 = [255, 150, 150];


let circle = {
    x: 600,
    y: 400,
    radius: 50,
}

function setup() {
    console.log("go")
    createCanvas(1200, 800);

}

function draw() {
    background("yellow");

    displayCircle();

    displaySquare();

    push();
    fill("red");
    textSize(20);
    text(counter, 20, 40);
    pop();
}

function displayCircle() {
    push();
    fill(80, 200, 190, ellipseAlpha);
    strokeWeight(3);
    ellipse(circle.x, circle.y, circle.radius);
    while (counter >= 1 || counter <= 10) {
        ellipse(circle.x, circle.y, circle.radius);
        circle.radius += circle.radius;

    }
    pop();
}

function displaySquare() {
    push();
    fill(fillBase1);
    rect(square1.x, square1.y, square1.size);
    fill(fillBase2);
    rect(square2.x, square2.y, square2.size);
    pop();

    const overlapSquare1 =
        mouseX > square1.x &&
        mouseX < square1.x + square1.size &&
        mouseY > square1.y &&
        mouseY < square1.y + square1.size;

    const overlapSquare2 =
        mouseX > square2.x &&
        mouseX < square2.x + square2.size &&
        mouseY > square2.y &&
        mouseY < square2.y + square2.size;

    if (overlapSquare1) {
        fillBase1 = fillOverlap1;
        square1.size = 105;
    } else {
        fillBase1 = fillNoOverlap1;
        square1.size = 100;
    }

    if (overlapSquare2) {
        fillBase2 = fillOverlap2;
        square2.size = 105;
    } else {
        fillBase2 = fillNoOverlap2;
        square2.size = 100;
    }
}

function mousePressed() {
    const overlapSquare1 =
        mouseX > square1.x &&
        mouseX < square1.x + square1.size &&
        mouseY > square1.y &&
        mouseY < square1.y + square1.size;
    if (overlapSquare1) {
        counter += 1;
    }
    if (counter >= 11) {
        counter = 0
    }
}