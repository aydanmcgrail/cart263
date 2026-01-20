"use strict";

const counter = 10;

let square1Size = 100;
let fillBase = [20, 20, 200];
let fillNoOverlap = [20, 20, 200];
let fillOverlap = [100, 230, 170];

function setup() {
    console.log("go")
    createCanvas(1200, 800);

}

function draw() {
    background("yellow");

    //noStroke();
    displaySquare();

    /**
        for (let i = counter; i >= 1; i--) {
    
        } */
}

function displaySquare() {
    push();
    fill(fillBase);
    rect(75, 75, square1Size);
    pop();

    const overlapSquare1 =
        mouseX > 75 &&
        mouseX < 75 + square1Size &&
        mouseY > 75 &&
        mouseY < 75 + square1Size;

    if (overlapSquare1) {
        fillBase = fillOverlap;
        console.log("contact");
    } else {
        fillBase = fillNoOverlap;
        square1Size = 100;
    }
}