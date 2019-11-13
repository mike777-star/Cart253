// Predator-Prey Simulation
// by Michael Sarlos
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// My predators
// you control playerImage
let playerImage;
//zaptron is your robot helper
let zaptron;

// My three prey from the afterlife
let zombie;
let ghoul;
let skeleton;

//preload my image files
function preload() {
  playerImage = loadImage('assets/images/robot.png');
  zaptron = loadImage('assets/images/zaptron.png');
  zombie = loadImage('assets/images/zombie.png');
  ghoul = loadImage('assets/images/ghoul.png');
  skeleton = loadImage('assets/images/skeleton.png');
}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {

  createCanvas(windowWidth, windowHeight);

//Seeing as I am using arrays, I am setting up their contructor values
  player = new Predator(100, 100, 5, color(200, 200, 0), 60,  playerImage);

//Your robot assistant will be it's own class
  mechanicalGroup[0] = new Zap (100, 100, 30, color(255, 100, 10), 50, zaptron);

   rottingGroup[0] = new Prey(100, 100, 30, color(255, 100, 10), 50, zombie);
   rottingGroup[1] = new Prey(100, 100, 30, color(255, 100, 10), 50, ghoul);
   rottingGroup[2] = new Prey(100, 100, 30, color(255, 100, 10), 50, skeleton);
}

// draw()
//``
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

  // Handle input for the tiger
  tiger.handleInput();

  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  bee.display();
}
