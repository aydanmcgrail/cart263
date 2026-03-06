class Hand {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    // they will all have a specific velocity
    // so we set its velocity to 0
    this.vy = 0;
    this.handBody = document.createElement("div");
  }

  move() {
    //this.x -= this.vx;//it only moves on Y axis
    this.y -= this.vy;
    //update the actual div...
    this.handBody.style.left = this.x + "px";
    this.handBody.style.top = this.y + "px";
  }

  // Display the planes
  renderHand() {
    this.handBody.classList.add("hand");
    this.handBody.style.width = this.width + "px";
    this.handBody.style.height = this.height + "px";
    this.handBody.style.left = this.x + "px";
    this.handBody.style.top = this.y + "px";
    this.handBody.style.borderRadius = this.width + "px";
  }
}
