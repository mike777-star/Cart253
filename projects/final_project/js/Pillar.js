

class Pillar {

  //Setting up the variables for the Pillar's constructor values
  constructor(x, y, w, h, speed, fillColor) {

    // Position
    this.x = x;
    this.y = y;
    //Rect values
    this.w = w;
    this.h = h;

    // this.randomHeight = 500;

    //Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    //Display properties
    this.fillColor = fillColor;

  }


  move() {
    //I only want the pillars to move from the right side of the screen to the left
    this.vx = -this.speed/1.5;

    this.x += this.vx;

    this.handleWrapping();
  }

  //THis checks to see if the Pillars goes of the left side so it knows to repeat itself
  //It redraws it as a random height each time
  handleWrapping() {
    if (this.x < this.w/2) {
      this.x += width;
      this.h = random(50,250)
    }

  }



  display() {
    push();


    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
    pop();
  }


  
}
