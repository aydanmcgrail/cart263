class Bird extends Animal {
    // Create a new Animal object t
    constructor(x, y, width, height) {
        super(x, y,);
        this.width = width;
        this.height = height;
        // NOTE: We don't know how a generic animal will move
        // so we set its velocity to 0
        this.vx = Math.random() * 5 + 1;
        this.vy = 0;
        this.animalBody = document.createElement("div");

        this.originalY = this.y;

        //ONLY in the Bird class : new variables
        this.angle = 0;
        this.sleepiness = 0.1;
    }

    // override A - p1
    // Move the Animal according to its velocity
    move() {
        this.y = this.originalY + Math.sin(this.angle) * 8
        this.angle += 0.05;
        //this.veer();
        super.move();
    }

    veer() {
        let r = Math.random();
        //console.log("in veer "+r)
        if (r < this.sleepiness) {
            this.vy += randomRange(-.1, .1);
        }
    }

    wrap() {
        if (this.x > window.innerWidth) {
            //reset
            this.vy = 0;
        }
        super.wrap();
    }

    // Display the animal 
    renderAnimal() {
        // Remember to call the superclass' version of this method!
        super.renderAnimal();
        this.animalBody.style.backgroundColor = `rgb(136, 67, 197)`;
        //add to the DOM
        document.getElementsByClassName("sky")[0].appendChild(this.animalBody);
    }
}

function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
