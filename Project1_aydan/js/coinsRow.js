// coinsRow.js
// create a static banner of coins.png at the top of the screen

class CoinsRow {
  constructor(width = 1920, height = 1080) {
    this.width = width;
    this.height = height;

    this.x = 0;
    this.y = 0;

    this.rowBody = document.createElement("div");
    this.render();
  }

  render() {
    this.rowBody.classList.add("coins");
    this.rowBody.style.position = "absolute";
    this.rowBody.style.left = this.x + "px";
    this.rowBody.style.top = this.y + "px";
    this.rowBody.style.width = this.width + "px";
    this.rowBody.style.height = this.height + "px";
  }
}

// add the coins row once the window has finished loading
window.addEventListener("load", () => {
  const banner = new CoinsRow();
  document.body.appendChild(banner.rowBody);
});
