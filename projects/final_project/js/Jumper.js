
class Jumper {


  // Setting up the variables for the Jumper's constructor values
  constructor(x, y, speed, fillColor, radius, playerImage) {
    //Position
    this.x = x;
    this.y = y;
    //Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    //Setting up the Jumper's image variable
    this.playerImage = playerImage;

    this.fillColor = fillColor;

    //player's health varibale so the game can end
    this.health = 1;

    //The only two inputs are jetting UPwards or fast falling DOWNwards
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;


    //I will eventuall input a blaster which will use the shift key
    this.shiftKey = 16;


  }

  handleInput() {

    //If you press upKey you go up the y axis. You can press it in the air...
    //...as many times as you want to

    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    }
    //If you press the downKey you fast fall to the ground
    else if (keyIsDown(this.downKey)){
      this.vy = this.speed*1.5;
    }
    //If you are in the air and are holding neither keys you fall to the...
    //...ground at a slower pace
    else {
      this.vy = this.speed/1.5;
    }

  }

  move() {
    this.y += this.vy;
    //This constrainss the player from falling through the canvas
    this.y = constrain(this.y, 0, 220);
  }



  handleWrapping() {

    if (this.x < 0) {
      this.x += width;
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

  //These are for later interactions between the player and the other elements
  handleBlocking(pillar) {
    let d = dist(this.x, this.y, pillar.x, pillar.y);
    if (d < this.radius + pillar.radius) {

      this.health = 0;
  }

  }

  //These are for later as well...
  handleZap(ufo) {
    let d = dist(this.x, this.y, ufo.x, ufo.y);
    if (d < this.radius + ufo.radius) {

      this.health = 0;
  }

  }

  handleEating() {

  }

  display() {
  push();
  noStroke();
  fill(this.fillColor);
  image(this.playerImage, this.x, this.y, this.radius * 2, this.radius * 2);
  pop();
  }
}
