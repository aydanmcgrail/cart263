

function setup() {
    console.log("go");
    createCanvas(800, 800);
}

function draw() {
    background("yellow");

    textSize(24);
    let spacing = 40;
    let randomColor = {
        r: random(0, 255),
        g: random(0, 255),
        b: random(0, 255),
    }

    let baseColor = "green";

    for (let row = 0; row < height; row++) {
        // Inner loop for columns (x-axis)
        for (let col = 0; col < width; col++) {
            let x = col * spacing + 20;
            let y = row * spacing + 20;
        }
        if (keyCode === 32) {
            console.log("lebag")
            baseColor = randomColor;
        } else {
            fill(baseColor);
            noStroke(); // No outline
            circle(x, y, 40); // Draw a circle at each position
        }

    }
}

