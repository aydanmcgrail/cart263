class Fork {
  constructor(x, y, width, height) {
    this.x = x;
    this.baseX = x;
    this.y = y;
    this.baseY = y;

    this.width = width;
    this.height = height;

    // collision area: only the very tip of the fork teeth, tighter offset
    this.collisionWidth = width * 0.3; // 30% of width centered
    this.collisionHeight = height * 0.12; // top 12% of height for just teeth tips
    this.collisionOffsetX = (width - this.collisionWidth) / 2; // centre horizontally
    this.collisionOffsetY = 0; // teeth start at top

    this.vy = 0;

    this.goUp = false;

    this.wobbleOffset = Math.random() * 1000;

    this.forkBody = document.createElement("div");
  }

  moveUp() {
    console.log("goUp");
    if (!this.goUp) {
      this.goUp = true;
      this.vy = -30;
    }
  }

  goDown() {
    if (this.goUp) {
      this.vy += 1; //speed of drop
      this.y += this.vy;

      if (this.y >= this.baseY) {
        this.y = this.baseY;
        this.vy = 0;
        this.goUp = false;
      }
    }
  }

  move(time) {
    //forks jumping down
    this.goDown();

    // idle wobble (only when not jumping)
    if (!this.goUp) {
      this.x = this.baseX + Math.sin(time * 0.05 + this.wobbleOffset) * 4;
    }

    this.forkBody.style.left = this.x + "px";
    this.forkBody.style.top = this.y + "px";
  }

  /*touchPlane(plane) {
    let planeEl = bird.animalBody.getBoundingClientRect();
    //let forkBody = this.animalBody.getBoundingClientRect();
    let d = distance(birdEl.x, birdEl.y, dogBody.x, dogBody.y);
    if (d < 50) {
      console.log("collision");
      console.log(bird.animalBody.style.background);
      bird.animalBody.style.background = `orange`;
    }
  }*/

  // Display the planes
  renderFork() {
    this.forkBody.classList.add("fork");

    this.forkBody.style.width = this.width + "px";
    this.forkBody.style.height = this.height + "px";

    this.forkBody.style.left = this.x + "px";
    this.forkBody.style.top = this.y + "px";
  }
}
