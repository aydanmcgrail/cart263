window.onload = function () {
  ////the sky where everything happens
  let sky = {
    ////forks
    numForks: 24,
    forks: [],
    ///planes
  };

  function createAndRenderTheSky() {}

  function updateSky() {
    if (sky.forks[2].isjumping === true) {
      console.log("jump");
      sky.forks[2].updateJump();
    }
  }

  function createForks() {
    // Create the correct number of forks and put them in our array
    for (let i = 0; i < sky.numForks; i++) {
      let x = 50;
      //let y = Math.random() * 100;
      let fork = new Fork(x, y, 15, 15);
      sky.forks.push(fork);
    }
  }

  createPlanes();
  createForks();
  this.requestAnimationFrame(updateSky);

  // jump on key press
  window.addEventListener("keydown", function (e) {
    //set up to allow got "0" to jump
    if (e.code === "Space") {
      //prevent default behaviour of the space bar
      e.preventDefault();
      //check if one of the forks is already jumping
      if (sky.forks[2].isjumping === false) {
        sky.forks[2].jump();
      }
    }
  });
}; //window onload
