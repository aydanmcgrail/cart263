"use strict";

function setup() {
    console.log("go")
    createCanvas(1200, 800);

}

function draw() {
    background("yellow");

    noStroke();

    push();
    fill(200, 30, 70);
    ellipse(80, 80, 100, 150);
    pop();

    push();
    fill(10, 150, 180);
    ellipse(280, 190, 200, 250);
    pop();

    push();
    fill(100, 190, 230);
    ellipse(650, 420, 400, 500);
    pop();
}