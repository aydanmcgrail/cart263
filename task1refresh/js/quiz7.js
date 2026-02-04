let spacingCircle = 80;
let spacingCircleClick = 20;
let spacingSquare = 80;
let spacingSquareClick = 40;

let baseColor = "green";
let clickCounter = 0;

function setup() {
  console.log("go");
  createCanvas(800, 800);
  //baseColor = "green";
}

function draw() {
  background("yellow");

  textSize(24);

  //let baseColor = "green";
  noStroke();
  fill(baseColor);

  for (let row = 0; row < height; row++) {
    // Inner loop for columns (x-axis)
    for (let col = 0; col < width; col++) {
      let x = col * 40 + 20; //40
      let y = row * spacingCircle + spacingCircleClick; //80
      ellipse(x, y, 40); // Draw a circle at each position
    }
  }

  for (let row = 0; row < height; row++) {
    // Inner loop for columns (x-axis)
    for (let col = 0; col < width; col++) {
      let x = col * 40 + 1; //40
      let y = row * spacingSquare + 1 + spacingSquareClick; //80
      rect(x, y, 38);
    }
  }

  /*if (clickCounter === 0) {
    for (let row = 0; row < height; row++) {
      // Inner loop for columns (x-axis)
      for (let col = 0; col < width; col++) {
        let x = col * spacing + 20;
        let y = row * spacing + 20;
        ellipse(x, y, 40); // Draw a circle at each position
        //let circle = true;
      }
    }
  } else if (clickCounter === 1) {
    for (let row = 0; row < height; row++) {
      // Inner loop for columns (x-axis)
      for (let col = 0; col < width; col++) {
        let x = col * spacing + 1;
        let y = row * spacing + 1;
        //imageMode(CENTER);
        rect(x, y, 38);
        //let circle = true;
      }
    }
  }*/
}

function keyPressed() {
  if (keyCode === 32) {
    let randomColor = {
      r: random(20, 220),
      g: random(20, 220),
      b: random(20, 220),
    };
    baseColor = color(randomColor.r, randomColor.g, randomColor.b);
  }
}

function mousePressed() {
  clickCounter += 1;
  if (clickCounter > 1) {
    clickCounter = 0;
  }
  if (clickCounter === 0) {
    spacingCircleClick = 20;
    spacingSquareClick = 40;
  } else if (clickCounter === 1) {
    spacingCircleClick = 60;
    spacingSquareClick = 0;
  }
}
