// Prey
//
// A class that represents a simple prey that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.

/////////////////////////
// ~10 ERRORS IN HERE
/////////////////////////

class Prey {
//Fixed: I changed glass to class//

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, fillColor, radius) {
    //Fixed: the contructor defined the y value as why so I added it in
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    ////////Fixed: speed was written sped
    // Time properties for noise() function
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    //Fixed... time properties for noise 0,0
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health;
  }

  // move
  //
  // Sets velocity based on the noise() function and the Prey's speed
  // Moves based on the resulting velocity and handles wrapping
  move() {
    //Fixed: function was labeled as move(r) so I changed it to move
    // Set velocity via noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;
    // Handle wrapping
    this.handleWrapping();
    //Fixed: changed handleWarping to handleWrapping
  }
  //Fixed: Missing bracket

    // handleWrapping
    //Fixed: Removed empty comment
    // Checks if the prey has gone off the canvas and
    // wraps it to the other side if so
    handleWrapping() {
      // Off the left or right
      if (this.x < 0) {
      //Fixed... >,<
        this.x += width;
      }
      else if (this.x > width) {
        this.x -= width;
      }
      // Off the top or bottom
      if (this.y < 0) {
        this.y += height;
      }
      else if (this.y > height) {
        this.y -= height;
      ////////Fixed: height was spelled hight
      }
    }

    // display
    //
    // Draw the prey as an ellipse on the canvas
    // with a radius the same size as its current health.
    display() {
      push();
      noStroke();
      fill(this.fillColor);
      this.radius = this.health;
      ellipse(this.x, this.y, this.radius * 2);
      //Fixed... two, 2
      pop();
    }

    // reset
    //
    // Set the position to a random location and reset health
    // and radius back to default
    reset() {
      // Random position
      this.x = random(0, width);
      this.y = random(0, height);
      // Default health
      this.health = this.maxHealth;
      // Default radius
      this.radius = this.health;
    }
  }
