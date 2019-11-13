class Zap {

constructor(x, y, speed, fillColor, radius, robotImage) {
  // Position
  this.x = x;
  this.y = y;
  // Velocity and speed
  this.vx = 0;
  this.vy = 0;
  this.speed = speed;

  this.tx = random(0, 1000); // To make x and y noise different
  this.ty = random(0, 1000); // we use random starting values

  this.robotImage = robotImage;
  // Health properties
  this.maxHealth = radius;
  this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
  this.healthLossPerMove = 0.1;
  this.healthGainPerEat = 1;
  // Display properties
  this.fillColor = fillColor;
  this.radius = this.health; // Radius is defined in terms of health
  // Input properties

}

// handleInput
//
// Checks if an arrow key is pressed and sets the predator's
// velocity appropriately.


// move
//
// Updates the position according to velocity
// Lowers health (as a cost of living)
// Handles wrapping
move() {
  this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
  this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
  // Update position

  // Update time properties
  this.tx += 0.01;
  this.ty += 0.01;
  // Update position
  this.x += this.vx;
  this.y += this.vy;
  // Update health
  this.health = this.health - this.healthLossPerMove;
  this.health = constrain(this.health, 0, this.maxHealth);
  // Handle wrapping
  this.handleWrapping();
  console.log(this.health);
}

// handleWrapping
//
// Checks if the predator has gone off the canvas and
// wraps it to the other side if so
handleWrapping() {
  // Off the left or right
  if (this.x < 0) {
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
  }
}

// handleEating
//
// Takes a Prey object as an argument and checks if the predator
// overlaps it. If so, reduces the prey's health and increases
// the predator's. If the prey dies, it gets reset.
handleEating(prey) {
  // Calculate distance from this predator to the prey
  let d = dist(this.x, this.y, prey.x, prey.y);
  // Check if the distance is less than their two radii (an overlap)
  if (d < this.radius + prey.radius) {
    // Increase predator health and constrain it to its possible range
    this.health += this.healthGainPerEat;
    this.health = constrain(this.health, 0, this.maxHealth);
    // Decrease prey health by the same amount
    prey.health -= this.healthGainPerEat;
    // Check if the prey died and reset it if so
    if (prey.health < 0) {
      prey.reset();
    }
  }
}

// display
//
// Draw the predator as an ellipse on the canvas
// with a radius the same size as its current health.
display() {
  push();
  noStroke();
  fill(this.fillColor);
  this.radius = this.health;
  image(this.robotImage, this.x, this.y, this.radius * 2, this.radius * 2);
  pop();
}
}
