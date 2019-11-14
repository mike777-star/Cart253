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

//I am defining my mechanicalGroup arrays move, display and handleEating functions
  for (let i = 0; i < mechanicalGroup.length; i++) {
        mechanicalGroup[i].move();
        mechanicalGroup[i].display();
        mechanicalGroup[i].handleEating(rottingGroup[0]);
        //...//
        //he will only be able to eat what ever rottingGroup[0]...
      }
//I am defining my mechanicalGroup array's move, display and handleEating functions...
//...so the player can eat the whole array group
      for (let i = 0; i < rottingGroup.length; i++) {
        rottingGroup[i].move();
        rottingGroup[i].display();
        player.handleEating(rottingGroup[i]);

      }

      for (let i = 0; i < mechanicalGroup.length; i++) {
    mechanicalGroup[i].move();
    mechanicalGroup[i].display();


      }
//I am defining my player's functions for display, move, input and handleEating for...
//...the zombie, ghoul and skeleton
      player.display();
      player.move();
      player.handleInput();
      player.handleEating(zombie);
      player.handleEating(ghoul);
      player.handleEating(skeleton);
}
