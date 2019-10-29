"use strict";

// Predator-Prey Simulation
// by Michael Sarlos
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

////////////////////
// 10 ERRORS IN HERE
////////////////////

// Our predator
let tiger;

// The three prey
let antelope;
let zebra;
let bee;

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
function setup() {
  ////////Fixed: added space between function and setup
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40);
  ////////Fixed: Tiger was missing his Y value so I inputed 100
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  ////////Fixed: Variable was defined as antelop but was written antelop(e) in the setup
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  ////////Fixed: Zebra was missing its diameter value
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);
  ////////Fixed: background was missing a (d) at the end

  // Handle input for the tiger
  tiger.handleInput();
  ////////Fixed: I added tiger.handleInput in order to control it
  // Move all the "animals"
  tiger.move();
  antelope.move();
  ////////Fixed: Variable was defined as antelop but was written antelop(e) in the setup
  zebra.move();
  bee.move();
  ////////Fixed: I added bee.move

  // Handle the tiger eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  ////////Fixed: display was written displ(o)y
  bee.display();
  ////////Fixed: bee was spelled b
}
