class Coin {
  constructor(x, y, width, height, vy = 5) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    // downward velocity
    this.vy = vy;

    this.coinBody = document.createElement("div");
    this.render();
  }

  update() {
    this.coinBody.style.left = this.x + "px";
    this.coinBody.style.top = this.y + "px";
  }

  move() {
    this.y += this.vy;
    this.update();
  }

  render() {
    this.coinBody.classList.add("coin");
    this.coinBody.style.width = this.width + "px";
    this.coinBody.style.height = this.height + "px";
    this.coinBody.style.position = "absolute";
    this.update();
  }
}
