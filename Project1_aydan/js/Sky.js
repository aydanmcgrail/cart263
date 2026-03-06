window.onload = function () {
  //// the sky where everything happens
  let sky = {
    numForks: 24,
    forks: [],
    planes: [],
    coins: [],
    hand: null,
  };

  // simple time counter used by moving objects
  let time = 0;

  function createForks() {
    let evenY = 540;
    let oddY = 580;

    // Create the correct number of forks and put them in our array
    for (let i = 0; i < sky.numForks; i++) {
      let x = i * 80;
      let y;
      if (i % 2 === 0) {
        y = evenY; //even forks are at evenY
      } else {
        y = oddY; //odd forks are at oddY
      }
      let fork = new Fork(x, y, 520, 520);
      sky.forks.push(fork);

      document.body.appendChild(fork.forkBody);
      fork.renderFork();
    }
  }

  function createPlanes() {
    const numPlanes = 18;
    sky.planes = [];

    for (let i = 0; i < numPlanes; i++) {
      const x = 2100 + i * 100;
      const y = randomRange(300, 500);
      const plane = new Plane(x, y, 200, 90);
      sky.planes.push(plane);

      document.body.appendChild(plane.planeBody);
      plane.renderPlane();
    }
  }

  function rectsIntersect(a, b) {
    return !(
      a.x + a.width < b.x ||
      a.x > b.x + b.width ||
      a.y + a.height < b.y ||
      a.y > b.y + b.height
    );
  }

  function updateSky() {
    time++;

    sky.forks.forEach((fork) => fork.move(time));

    sky.planes.forEach((p) => {
      p.move(time);
      p.wrap();
    });

    // update coins and remove when off-screen or upon collision
    for (let i = sky.coins.length - 1; i >= 0; i--) {
      const c = sky.coins[i];
      c.move();

      if (c.y > 1080) {
        c.coinBody.remove();
        sky.coins.splice(i, 1);
        continue;
      }

      for (let j = 0; j < sky.planes.length; j++) {
        const p = sky.planes[j];
        // create collision box for plane
        const planeCollisionBox = {
          x: p.x + p.collisionOffsetX,
          y: p.y + p.collisionOffsetY,
          width: p.collisionWidth,
          height: p.collisionHeight,
        };
        if (rectsIntersect(c, planeCollisionBox)) {
          c.coinBody.remove();
          sky.coins.splice(i, 1);
          p.explode(); // make plane invisible, but don't remove
          break;
        }
      }
    }

    // check fork-plane collisions
    for (let i = sky.forks.length - 1; i >= 0; i--) {
      const f = sky.forks[i];
      // create collision box for fork teeth only
      const forkCollisionBox = {
        x: f.x + f.collisionOffsetX,
        y: f.y + f.collisionOffsetY,
        width: f.collisionWidth,
        height: f.collisionHeight,
      };
      for (let j = sky.planes.length - 1; j >= 0; j--) {
        const p = sky.planes[j];
        // create collision box for plane
        const planeCollisionBox = {
          x: p.x + p.collisionOffsetX,
          y: p.y + p.collisionOffsetY,
          width: p.collisionWidth,
          height: p.collisionHeight,
        };
        if (p.alive && rectsIntersect(forkCollisionBox, planeCollisionBox)) {
          p.explode(); // make plane invisible, but don't remove
        }
      }
    }
    if (sky.hand) sky.hand.update();

    requestAnimationFrame(updateSky);
  }

  // hand sits at the top and follows the mouse
  sky.hand = new Hand(500, 500); // width/height can be tweaked to match image size
  document.body.appendChild(sky.hand.handBody);

  window.addEventListener("mousemove", function (e) {
    sky.hand.setX(e.clientX);
    sky.hand.setY(e.clientY);
  });

  window.addEventListener("click", function () {
    if (sky.hand) {
      sky.hand.close(); // show closed hand briefly on click
    }
  });

  createPlanes();
  createForks();

  function createCoin(startX, startY, vy) {
    const coin = new Coin(startX, startY, 60, 60, vy);
    sky.coins.push(coin);
    document.body.appendChild(coin.coinBody);
  }

  // jump on key press
  window.addEventListener("keydown", function (e) {
    //set up to allow got "0" to jump
    if (e.code === "ArrowDown") {
      //prevent default behaviour of the space bar
      e.preventDefault();
      //check if one of the forks is already jumping
      let randomFork = sky.forks[Math.floor(Math.random() * sky.forks.length)];
      randomFork.moveUp();
    }
    if (e.code === "ArrowUp") {
      // spawn a coin from the top at random x, falling with random speed
      const randomX = Math.random() * (1920 - 60);
      const randomVy = 3 + Math.random() * 5; // speed between 3 and 8
      createCoin(randomX, -60, randomVy);
    }
  });

  // start the animation loop
  requestAnimationFrame(updateSky);
}; // window onload
