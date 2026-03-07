class Hand {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    // start above the viewport so "idle" is high
    this.x = 960 - this.width / 2;
    this.y = -this.height * 0.8;

    // targets for lerping (delayed movement)
    this.targetX = this.x;
    this.targetY = this.y;

    // adjustable lerp speed: lower = more delay, higher = faster follow
    // intense delay: start low, e.g. 0.02; increase to 0.1+ for less delay
    this.lerpSpeed = 0.02;

    // collision box for the closed fist (tip of the hand)
    this.fistWidth = width * 0.35; // 35% of hand width
    this.fistHeight = height * 0.25; // 25% of hand height (just the fist)
    this.fistOffsetX = (width - this.fistWidth) / 2; // centre horizontally
    this.fistOffsetY = 0; // fist at top of hand

    this.handBody = document.createElement("div");
    this.render();
  }

  /**
   * update DOM position based on current x/y, with lerping towards targets
   */
  update() {
    // lerp towards targets for delayed movement
    this.x += (this.targetX - this.x) * this.lerpSpeed;
    this.y += (this.targetY - this.y) * this.lerpSpeed;

    this.handBody.style.left = this.x + "px";
    this.handBody.style.top = this.y + "px";
  }

  //centre the hand horizontally on the provided clientX coordinate
  setX(clientX) {
    let target = clientX - this.width / 4;
    target = Math.max(0, Math.min(target, 2200 - this.width));
    this.targetX = target;
    // no update() call here; let the animation loop handle it
  }

  //move the hand in depth/vertical space based on mouse Y.
  //the hand will never drop lower than half the viewport height.
  setY(clientY) {
    // position hand so mouse sits roughly in its centre
    let target = clientY - this.height;
    // constrain to upper quarter of the window so it never drops too far
    const maxY = window.innerHeight / 4 - this.height / 2;
    target = Math.min(target, maxY);
    target = Math.max(-this.height, target); // allow it to start above the top
    this.targetY = target;
    // no update() call here; let the animation loop handle it
  }

  /**
   * briefly show the closed hand image on click
   */
  close() {
    this.handBody.style.backgroundImage = "url('../images/mainClosed.png')";
    setTimeout(() => {
      this.handBody.style.backgroundImage = "url('../images/main.png')";
    }, 200); // show closed for 200ms
  }

  render() {
    this.handBody.classList.add("hand");
    this.handBody.style.width = this.width + "px";
    this.handBody.style.height = this.height + "px";
    this.handBody.style.backgroundImage = "url('../images/main.png')";
    this.handBody.style.position = "absolute";
    this.update();
  }
}
