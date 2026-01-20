"use strict";


let square1 = {
    x: 0,
    y: 0,
    height: 800,
    width: 400,
    fill: "rgb(189, 221, 95)",
    fills: {
        overlap: "rgb(209, 83, 33)",
        noOverlap: "rgb(189, 221, 95)",
    }
}

let square2 = {
    x: 400,
    y: 0,
    width: 400,
    fill: "rgb(10, 150, 180)",
    fills: {
        overlap: "rgb(130, 103, 218)",
        noOverlap: "rgb(10, 150, 180)",
    }
}

let square3 = {
    x: 800,
    y: 0,
    fill: [100, 190, 30],
    fills: {
        overlap: [36, 78, 120],
        noOverlap: [100, 190, 230],
    }
}

let squareWidth = 400;
let squareHeight = 800;

function setup() {
    console.log("go")
    createCanvas(1200, 800);
}

function draw() {
    background("yellow");

    checkInput();

    noStroke();



    push();
    fill(square1.fills.noOverlap.r, square1.fills.noOverlap.g, square1.fills.noOverlap.b);
    rect(square1.x, square1.y, square1.width, square1.height);
    pop();

    push();
    fill(square2.fill);
    rect(square2.x, square2.y, squareWidth, squareHeight);
    pop();

    push();
    fill(square3.fill);
    rect(square3.x, square3.y, squareWidth, squareHeight);
    pop();

    //textSize(28);
    //text(distSquare1, 200, 200);

}

function checkInput() {
    const distSquare1 = dist(mouseX, mouseY, square1.x, square1.y);
    const overlapSquare1 = distSquare1 < square1.height;

    if (overlapSquare1) {
        square1.y += 1;
        square1.fill = square1.fills.overlap;
    } else { square1.fill = square1.fills.noOverlap; }
    //else { square1.fills.noOverlap };

    //*const distSquare2 = dist(mouseX, mouseY, square2.x, square2.y);
    //const overlapSquare2 = distSquare2 < squareheight / 2;

    //const distSquare3 = dist(mouseX, mouseY, square3.x, square3.y);
    //const overlapSquare3 = distSquare3 < squareheight / 2; 


}



