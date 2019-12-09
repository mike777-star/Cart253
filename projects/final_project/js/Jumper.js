
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

    this.radius = 1;

    this.fillColor = fillColor;

    //player's health varibale so the game can end
    this.health = 1;

    //The only two inputs are jetting UPwards or fast falling DOWNwards
    this.upKey = UP_ARROW;
    this.downKey = DOWN_ARROW;


    //I will eventuall input a blaster which will use the shift key
    this.spaceKey = 32;

    this.score = 0;


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

    //When you press spacebar the Jumper fires a bullet from the Jumper's position
    if (keyIsDown(this.spaceKey)) {
      lazer.x = player.x;
      lazer.y = player.y;
      soundbite.play()

    }
  }

  move() {
    //allows the Jumper to travel the y axis
    this.y += this.vy;
    //This constrainss the player from falling through the canvas
    this.y = constrain(this.y, 0, 220);
  }

  // handleWrapping() {
  //
  //   if (this.x < 0) {
  //     this.x += width;
  //   }
  //   else if (this.x > width) {
  //     this.x -= width;
  //   }
  //
  //   if (this.y < 0) {
  //     this.y += height;
  //   }
  //   else if (this.y > height) {
  //     this.y -= height;
  //   }
  // }

  //If the Jumper radius intersects with the pillars height the Jumper's...
  //health will be reduced to 0 and the game will end
  handleBlocking(pillar) {
    let d = dist(this.x, this.y, pillar.x, pillar.y);
    if (d < this.radius + pillar.h) {
      this.health = 0;


  }


  }

  //Same applies to the Ufo, except it will use the Ufo's radius instead...
  //...of height. The game still ends
  handleEating(ufo) {
    let d = dist(this.x, this.y, ufo.x, ufo.y);
    if (d < this.radius + ufo.radius) {

      this.health = 0;
  }

  }

  //If the Bullet's radius intersects the aliens on trajectory, the Ufo's...
  //health will be reduced to zero
  handleZap(ufo) {
    let d = dist(lazer.x, lazer.y, ufo.x, ufo.y);
    if (d < lazer.radius + ufo.radius) {

      ufo.health = 0;

      ufo.x = width;
      //Score will update for each Ufo killed
      this.score += 1;
  }

  }



  display() {
  push();
  noStroke();
  fill(this.fillColor);
  image(this.playerImage, this.x, this.y);
  pop();
  }
}
