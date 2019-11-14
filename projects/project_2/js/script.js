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

//A virus which slows you down
let virus;
// My three prey from the afterlife
let player;
let zombie;
let ghoul;
let skeleton;

//Defining my title screen variable
let title;

let starterImage;
let enderImage;

let gameBegin = true;
let gameOver = false;

//I forgot to define my array groups
let mechanicalGroup = [];
let rottingGroup = [];
//I created an array group for my germ
let germGroup = [];


//preload my image files
function preload() {
  playerImage = loadImage('assets/images/robot.png');
  zaptron = loadImage('assets/images/zaptron.png');
  zombie = loadImage('assets/images/zombie.png');
  ghoul = loadImage('assets/images/ghoul.png');
  skeleton = loadImage('assets/images/skeleton.png');
  virus = loadImage('assets/images/germ.png');
  starterImage = loadImage('assets/images/starters.png');
  enderImage = loadImage('assets/images/apoco.jpg');
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
  mechanicalGroup[0] = new Zap(100, 100, 30, color(255, 100, 10), 50, zaptron);

   rottingGroup[0] = new Prey(100, 100, 30, color(255, 100, 10), 50, zombie);
   rottingGroup[1] = new Prey(100, 100, 30, color(255, 100, 10), 50, ghoul);
   rottingGroup[2] = new Prey(100, 100, 30, color(255, 100, 10), 50, skeleton);
   germGroup[0] = new Germ (500, 500, 5, color(255, 0, 0), 50, virus);

//I will be creating a new class for my title screens
    title = new Wordscreen(gameBegin,gameOver);
}

// draw()
//``
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black


//Setting up my conditionals so the start screen displays

//This image will display for the start screen
if (gameOver == false && gameBegin == true){
  image(starterImage, 0, 0, width, height)
  title.display();
  console.log(gameBegin);
  return;

}

if (gameOver == false && gameBegin == false){

//This displays the score everytime you completely eat an prey
  background(0);
  fill(150, 0, 255);
  textSize(30);
  text('Score '+player.score ,100,50);

}

//This will display the game over screen once the players health <= 0
if (player.health <= 0){
  gameOver = true;
  fill(255, 0, 0);
  textSize(50);
  image(enderImage, 0, 0, width, height)
  text('GameOver' ,300,550);


}

if (gameOver == false) {


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

      for (let i = 0; i < germGroup.length; i++) {
      germGroup[i].move();
      germGroup[i].display();
      player.handleSickness(germGroup[i]);

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
//Added the function for when the player passes over the virus
      player.handleSickness(virus);

    }
}



//Creating my mouse click functon so clicking the start screen starta the game
function mouseClicked(){
    if (mouseX > 0 && mouseY > 0){
      gameBegin = false;
    }
}
