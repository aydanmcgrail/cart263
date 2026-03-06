class Fork {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // they will all have a specific velocity
    // so we set its velocity to 0
    this.vy = 0;
    this.forkBody = document.createElement("div");
    this.goUp = false;
  }

  moveUp() {
    console.log("goUp");
    this.goUp = true;
    this.vy = -35; //speed to go up
  }

  touchPlane(plane) {
    let planeEl = bird.animalBody.getBoundingClientRect();
    //let forkBody = this.animalBody.getBoundingClientRect();
    let d = distance(birdEl.x, birdEl.y, dogBody.x, dogBody.y);
    if (d < 50) {
      console.log("collision");
      console.log(bird.animalBody.style.background);
      bird.animalBody.style.background = `orange`;
    }
  }

  goDown() {
    if (this.y < 150) {
      this.vy += 1; //speed of drop
    }
    //stop going up
    else {
      this.goUp = false;
      this.vy = 0; //reset y speed
      this.y = 100; //reset y value
    }
  }

  move() {
    //this.x -= this.vx;//it only moves on Y axis
    this.y -= this.vy;
    //update the actual div...
    this.forkBody.style.left = this.x + "px";
    this.forkBody.style.top = this.y + "px";
  }

  // Display the planes
  renderFork() {
    this.forkBody.classList.add("fork");
    this.forkBody.style.width = this.width + "px";
    this.forkBody.style.height = this.height + "px";
    this.forkBody.style.left = this.x + "px";
    this.forkBody.style.top = this.y + "px";
    this.forkBody.style.borderRadius = this.width + "px";
  }
}
