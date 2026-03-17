// manages the info overlay that appears when the user presses "I"

class InfoOverlay {
  constructor() {
    this.visible = false;

    this.img = document.createElement("img");
    this.img.id = "infoOverlay";
    this.img.src = "images/infos1.png";

    // most layout & visibility work is handled by CSS (#infoOverlay rules)
    document.body.appendChild(this.img);

    window.addEventListener("keydown", (e) => {
      if (e.code === "KeyI" && !this.visible) {
        // only open with I when not already visible
        this.show();
      } else if (e.code === "Escape" && this.visible) {
        // close only with Escape
        this.hide();
      }
    });
  }

  show() {
    this.visible = true;
    this.img.classList.add("visible");
  }

  hide() {
    this.visible = false;
    this.img.classList.remove("visible");
  }

  toggle() {
    this.visible ? this.hide() : this.show();
  }
}

// instantiate when the page loads so it's ready immediately
window.addEventListener("load", () => {
  new InfoOverlay();
});
