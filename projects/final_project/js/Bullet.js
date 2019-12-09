
class Bullet {


  // Setting up the variables for the Jumper's constructor values
  constructor(x, y, speed, fillColor, radius, lazerImage) {
    //Position
    this.x = x;
    this.y = y;
    //Velocity and speed
    this.vx = speed;
    this.vy = 0;
    this.speed = speed;

    this.radius = 1;

    //Setting up the Bullet's image variable
    this.lazerImage = lazerImage;

    this.fillColor = fillColor;

    //When you press the spacebar a Bullet will fire from the Jumper
    this.spaceKey = 32;

  }

  handleInput() {

    //If you press upKey you go up the y axis. You can press it in the air...
    //...as many times as you want to


  }
  //If the bullet's radius comes in contact with aliens. The alien's health...
  //...will be reduced to 0 and it will die
  handleZap() {
    let d = dist(this.x, this.y, aliens.x, aliens.y);
    if (d < this.radius + aliens.radius) {

      aliens.health = 0;
  }
}
  //The bullet travels across the x axis left to right
  move() {
    this.x += this.vx;

  }

  display() {
  push();
  noStroke();
  fill(this.fillColor);
  image(this.lazerImage, this.x, this.y);
  pop();
  }
}
