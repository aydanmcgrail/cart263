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
  },
};

let square2 = {
  x: 400,
  y: 0,
  width: 400,
  fill: "rgb(10, 150, 180)",
  fills: {
    overlap: "rgb(130, 103, 218)",
    noOverlap: "rgb(10, 150, 180)",
  },
};

let square3 = {
  x: 800,
  y: 0,
  fill: [100, 190, 30],
  fills: {
    overlap: [36, 78, 120],
    noOverlap: [100, 190, 230],
  },
};

let squareWidth = 400;
let squareHeight = 800;

function setup() {
  console.log("go");
  createCanvas(1200, 800);
}

function draw() {
  background("yellow");

  checkInput();

  noStroke();

  push();
  fill(square1.fill);
  rect(square1.x, square1.y, squareWidth, squareHeight);
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
  //const distSquare1 = dist(mouseX, mouseY, square1.x, square1.y);
  const overlapSquare1 =
    mouseX > square1.x &&
    mouseX < square1.x + squareWidth &&
    mouseY > square1.y &&
    mouseY < square1.y + squareHeight;

  if (overlapSquare1) {
    //square1.y += 1;
    square1.fill = square1.fills.overlap;
  } else {
    square1.fill = square1.fills.noOverlap;
  }

  const overlapSquare2 =
    mouseX > square2.x &&
    mouseX < square2.x + squareWidth &&
    mouseY > square2.y &&
    mouseY < square2.y + squareHeight;
  if (overlapSquare2) {
    //square1.y += 1;
    square2.fill = square2.fills.overlap;
  } else {
    square2.fill = square2.fills.noOverlap;
  }

  const overlapSquare3 =
    mouseX > square3.x &&
    mouseX < square3.x + squareWidth &&
    mouseY > square3.y &&
    mouseY < square3.y + squareHeight;
  if (overlapSquare3) {
    //square1.y += 1;
    square3.fill = square3.fills.overlap;
  } else {
    square3.fill = square3.fills.noOverlap;
  }
}
