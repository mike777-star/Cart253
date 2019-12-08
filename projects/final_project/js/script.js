

//Jet Jumper by Michael Sarlos

//Visual elements

//The player is a jet pack jumper who is supposed to avoid the aliens and jump over the blocks
let player;

//He is able to shoot a lazer which travels the screen left to right
let lazer;

//The blocks appear from the right side of the screen and travel to the left
let blocks;
let aliens;

//setting up my image files even though they undefined
function preload() {
  player = loadImage('assets/images/spaceman.png');
  lazer = loadImage('assets/images/beam.png');
  //Realized I didn't need an image for my blocks
  //blocks = loadImage('assets/images/.png');//
  aliens = loadImage('assets/images/et.png');

  }

function setup() {

  createCanvas(500, 500);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);

//Setting up my constructor values for my Jumper class
  player = new Jumper(100, 220, 5, color(200, 200, 0), 60,  player);

//Setting up constructors for my Arrays
  obstacleGroup[0] = new Pillar(10, 250, 50, 100, 5, color(255, 100, 10));

  enemyGroup[0] = new UFO(500, 100, 30, color(255, 100, 10), 50, aliens);

}

function draw() {

//I am calling my array groups alongside their functions involving the player

  for (let i = 0; i < obstacleGroup.length; i++) {
      obstacleGroup[i].move();
      obstacleGroup[i].display();
      player.handleBlocking(obstacleGroup[i]);

    }

    for (let i = 0; i < enemyGroup.length; i++) {
    enemyGroup[i].move();
    enemyGroup[i].display();
    //For when I add the blaster
    player.handleZap(enemyGroup[i]);
    player.handleEating(enemyGroup[i]);
    }


//My player's function
    player.display();
    player.move();
    player.handleInput();
    player.handleBlocking(blocks);
    player.handleZap(aliens);
    player.handleEating(aliens);
}
