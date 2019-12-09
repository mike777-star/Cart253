

class Ufo {

  //Setting up the variables for the UFO's constructor values
  constructor(x, y, speed, fillColor, radius, aliensImage) {

    //Setting up the player's image variable
    this.aliensImage = aliensImage;
    
    //Position
    this.x = x;
    this.y = y;

    //Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    //Time properties for noise() function
    this.ty = random(0, 1000);

    //Setting up the player's image variable



  }


  move() {

    //Sets the y values velocity through the noise function
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);

    //This constrains the Ufo motion between two y values so it doesn't...
    //interfere with blocks two much and make the game too hard
    this.y = constrain(this.y,20, 100);
    this.y += this.vy;

    //Update time properties
    this.x += this.vx;

    this.ty += 0.01;

    //Setting the speed for how fast it travels the x axis from right to left
    this.vx = -this.speed/2.5;

    this.handleWrapping();
  }


  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
      this.y = random(0, 300);
    //Everytime it makes past the left side it will wrap the other side but...
    //...with a random y value
    }
    else if (this.x > width) {
      this.x -= width;
    }

    if (this.y < 0) {
      this.y += height;
    }
    else if (this.y > height) {
      this.y -= height;
    }
  }


  display() {
    push();
    noStroke();
    fill(255);
    image(this.aliensImage, this.x, this.y, this.radius * 2, this.radius * 2);
    pop();
    }




//I will use this later for the lazer interaction
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
