// Exercise 1 - Movement
// Pippin Barr
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// I am defining my second cirlce's variables. Maybe these aren't the best names.
let circle2X;
let circle2Y;
let circle2Size = 100;


// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;


// I am defining my images variable
let exampleImage;

let scale = 0.5;

// I am defining my images path in my folder
function preload() {
  exampleImage = loadImage("assets/images/happy.png");
}

// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);



  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // I struggled to fully understand these lines. Specifically "from center" in relation to dividing by 2.
  circle2X = -circle2Size/2;
  circle2Y = height + circle2Size/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;



  // We'll draw rectangles from the center
  rectMode(CENTER);
  // We won't have a stroke in this
  noStroke();

  // I am positioning my image. My interpretation of /2 here is that it is setting it up based off the center of the canvas' width (640/2) and height (640/2).
  imageMode(CENTER);
image(exampleImage, width/2, height/2);

}


// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {
  // We don't fill the background so we get a drawing effect

  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(0,100,100,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);


  //This object moves from the center of y axis across the x axis left to right
  circle2X += 1;
  circle2Y = 340;

  fill(100,0,100,10);

  ellipse(circle2X,circle2Y,circle2Size,circle2Size);


  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(255,255,0,10);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);

  rect(mouseX,mouseY,25,25);

  exampleImage = mouseX;
  exampleImage = mouseY;
}
