"use strict";


let square1 = {
    x: 0,
    y: 0,
    height: 800,
    fill: [200, 30, 70],
    fills: {
        overlap: [169, 230, 160],
        noOverlap: [200, 30, 70],
    }
}

let square2 = {
    x: 400,
    y: 0,
    fill: [10, 150, 180],
    fills: {
        overlap: [66, 186, 162],
        noOverlap: [10, 150, 180],
    }
}

let square3 = {
    x: 800,
    y: 0,
    fill: [100, 190, 230],
    fills: {
        overlap: [36, 78, 120],
        noOverlap: [100, 190, 230],
    }
}

function setup() {
    console.log("go")
    createCanvas(1200, 800);
}

function draw() {
    background("yellow");

    checkInput();

    noStroke();

    let squareWidth = 400;
    let squareHeight = 800;

    push();
    fill(square1.fill);
    rect(square1.x, square1.y, squareWidth, square1.height);
    pop();

    push();
    fill(square2.fill);
    rect(square2.x, square2.y, squareWidth, squareHeight);
    pop();

    push();
    fill(square3.fill);
    rect(square3.x, square3.y, squareWidth, squareHeight);
    pop();

}

function checkInput() {
    const distSquare1 = dist(mouseX, mouseY, square1.x, square1.y);
    const overlapSquare1 = distSquare1 < square1.height / 2 && squareWidth / 2;

    if (overlapSquare1) {
        square1.y += 1;
        square1.fill = square1.fills.overlap;
    }
    //else { square1.fills.noOverlap };

    //*const distSquare2 = dist(mouseX, mouseY, square2.x, square2.y);
    //const overlapSquare2 = distSquare2 < squareheight / 2;

    //const distSquare3 = dist(mouseX, mouseY, square3.x, square3.y);
    //const overlapSquare3 = distSquare3 < squareheight / 2; 


}



