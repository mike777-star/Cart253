

//Jet Jumper by Michael Sarlos

//Visual elements

//The player is a jet pack jumper who is supposed to avoid the aliens and jump over the blocks
let player;

//He is able to shoot a lazer which travels the screen left to right
let lazer;

//Array group for the blocks
let obstacleGroup = [];
//Array group for the aliens
let enemyGroup = [];

//defining my titlescreen
let title;


//The blocks appear from the right side of the screen and travel to the left
let blocks;
let aliens;

//Defining my start and end screen images
let starterImage;
let enderImage;

//Defining my when game begins and ends
let gameBegin = true;
let gameOver = false;

//setting up my image files even though they undefined
function preload() {
  player = loadImage('assets/images/spaceman.png');
  lazer = loadImage('assets/images/beam.png');
  //Realized I didn't need an image for my blocks
  //blocks = loadImage('assets/images/.png');//
  aliens = loadImage('assets/images/et.png');

  }

function setup() {

//Resized the canvas to be wider. I forgot to do that when I changed...
//... when I changed my elements positions and size
  createCanvas(500, 300);
  rectMode(CENTER);
  noStroke();
  fill(255);

//Setting up my constructor values for my Jumper class
  player = new Jumper(100, 220, 5, color(200, 200, 0), 60,  player);

//Setting up constructors for my Arrays
  obstacleGroup[0] = new Pillar(10, 250, 50, 100, 5, color(255, 100, 10));

  enemyGroup[0] = new Ufo(500, 100, 30, color(255, 100, 10), 50, aliens);

//Setting up my constructor for my Wordscreen class
  title = new Wordscreen(gameBegin,gameOver);

}

function draw() {
  background(255);
  //Calling the title screen when the game loads
  if (gameOver == false && gameBegin == true){
    // image(enderImage, 0, 0, width, height);
    title.display();
    console.log(gameBegin);
    return;

    }
  //Calling the GameOver screen when the game ends
      if (player.health <= 0){
    gameOver = true;
    fill(255, 0, 0);
    textSize(50);
    // image(enderImage, 0, 0, width, height)
    text('GameOver' ,300,550);
    }

      if (gameOver == false) {

  //I am calling my array groups alongside their functions involving the player

    for (let i = 0; i < 1; i++) {
        obstacleGroup[0].move();
        obstacleGroup[0].display();
        player.handleBlocking(obstacleGroup[0]);
      }

    for (let i = 0; i < 1; i++) {
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
      player.handleBlocking(obstacleGroup);
      player.handleZap(aliens);
      player.handleEating(aliens);

    }


  }

  //Defining the function which lets the player click the starter screen...
  //...to trigger the beginning of the game

  function mouseClicked(){
    if (mouseX > 0 && mouseY > 0){
      gameBegin = false;
    }
  }
