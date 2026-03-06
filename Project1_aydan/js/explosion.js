// explosion.js
// handles creating explosion effects

function createExplosion(x, y) {
  const explosion = document.createElement("div");
  explosion.classList.add("explosion");
  explosion.style.left = x + "px";
  explosion.style.top = y + "px";
  document.body.appendChild(explosion);
  setTimeout(() => explosion.remove(), 500); // show explosion for 0.5 seconds
}