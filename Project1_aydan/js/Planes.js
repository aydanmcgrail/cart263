// utility
function randomRange(min, max) {
  return min + Math.random() * (max - min);
}

////there a 4 different type of planes

planeImages = [
  "../images/plane1.png",
  "../images/plane2.png",
  "../images/plane3.png",
  "../images/plane4.png",
  "../images/plane5.png",
  "../images/plane6.png",
  "../images/plane7.png",
  "../images/plane8.png",
  "../images/plane9.png",
];

function getRandomPlane() {
  return planeImages[Math.floor(Math.random() * planeImages.length)];
}

class Plane {
  constructor(x, y, width, height) {
    this.x = x;
    this.baseY = randomRange(100, 400);
    this.y = y;

    this.width = width;
    this.height = height;

    // collision box: smaller, focused on plane body
    this.collisionWidth = width * 0.7; // 70% of width
    this.collisionHeight = height * 0.5; // 50% of height
    this.collisionOffsetX = (width - this.collisionWidth) / 2; // centre horizontally
    this.collisionOffsetY = (height - this.collisionHeight) / 2; // centre vertically

    this.vx = Math.random() * 13 + 2;

    this.hoverOffset = Math.random() * 1000;

    this.alive = true;

    this.planeBody = document.createElement("div");

    this.renderPlane();
  }

  move(time) {
    //horizontal move
    this.x -= this.vx;

    //up and down motion
    this.y = this.baseY + Math.sin(time * 0.05 + this.hoverOffset) * 10;

    //update the actual div...
    this.planeBody.style.left = this.x + "px";
    this.planeBody.style.top = this.y + "px";
  }

  explode() {
    if (!this.alive) return;

    this.alive = false;

    this.planeBody.style.visibility = "hidden";

    createExplosion(this.x, this.y);
  }

  // Wrap the planes if they reach the left side
  wrap() {
    if (this.x < -this.width) {
      this.x = 1920 + 100;

      //this makes sure the plane is visible and alive
      // when it comes back on the left, destroyed or not
      this.alive = true;
      this.planeBody.style.visibility = "visible";

      // new random plane image
      this.planeBody.style.backgroundImage = `url(${getRandomPlane()})`;
    }
  }

  // Display the planes
  renderPlane() {
    this.planeBody.classList.add("plane");

    this.planeBody.style.width = this.width + "px";
    this.planeBody.style.height = this.height + "px";

    this.planeBody.style.left = this.x + "px";
    this.planeBody.style.top = this.y + "px";

    this.planeBody.style.backgroundImage = `url(${getRandomPlane()})`;
    this.planeBody.style.backgroundSize = "contain";
    this.planeBody.style.backgroundRepeat = "no-repeat";
  }
}
