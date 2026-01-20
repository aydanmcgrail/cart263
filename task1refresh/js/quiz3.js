"use strict";

let square1 = {
    x: 100,
    y: 100,
    size: 100,
}

let square2 = {
    x: 250,
    y: 200,
    size: 200,
}

let square3 = {
    x: 650,
    y: 300,
    size: 375,
}




function setup() {
    console.log("go")
    createCanvas(1200, 800);
}

function draw() {
    background("yellow");

    noStroke();
    push();
    fill("red");
    rect(square1.x, square1.y, square1.size);
    pop();

    push();
    fill("blue");
    rect(square2.x, square2.y, square2.size);
    pop();

    let randomColor = random(0, 255);
    push();
    fill(randomColor, randomColor);
    rect(square3.x, square3.y, square3.size);
    pop();

    square3.y += 4;

    if (square3.y >= 800) {
        square3.y = -375;
    }
}

function mousePressed() {
    square1.x += 4
}

function keyPressed() {
    if (keyCode === 32) {
        square2.x += 4
    }

}

