function setup() {
    console.log("go");
    createCanvas(1200, 800);
}

function draw() {
    background("yellow");

    fill("red");
    textSize(36);
    text("TEST", width / 2, height / 2);

    textSize(24);

    for (let row = 0; row <= 15; row++) {
        let y = 60 + row * 47;
        text(row, 50, y,);
    }

    for (let col = 0; col <= 9; col++) {
        let x = 50 + col * 120;
        text(col, x, 60,);
    }
}