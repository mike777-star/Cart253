

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
let backImage;

let soundbite;

//Defining my when game begins and ends
let gameBegin = true;
let gameOver = false;


//setting up my image files
function preload() {
  player = loadImage('assets/images/spaceman.png');
  lazer = loadImage('assets/images/beam.png');
  //Realized I didn't need an image for my blocks
  //blocks = loadImage('assets/images/.png');//
  aliens = loadImage('assets/images/et.png');

  //my images for the start screen and end screen
  starterImage = loadImage('assets/images/starter.png');
  enderImage = loadImage('assets/images/ender.png');
  backImage = loadImage('assets/images/background.png');

  soundbite = loadSound("assets/sounds/sound2.wav")
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

//Constructor for my bullet
  lazer = new Bullet(100, 220, 5, color(200, 200, 0), 60, lazer);

//Setting up constructors for my Arrays
  obstacleGroup[0] = new Pillar(500, 250, 50, 100, 5, color(161, 156, 228));

  enemyGroup[0] = new Ufo(500, 100, 30, color(255, 100, 10), 50, aliens);

//Setting up my constructor for my Wordscreen class
  title = new Wordscreen(gameBegin,gameOver);

}

function draw() {
  image(backImage, 0, 0, width, height);
  //Calling the startscreen when the game loads
  if (gameOver == false && gameBegin == true){
    //calling my start screen's image
    image(starterImage, 0, 0, width, height)
    title.display();
    console.log(gameBegin);
    return;

    }
  //Calling the GameOver screen when the game ends
      if (player.health <= 0){
    gameOver = true;
    fill(255, 0, 0);
    textSize(50);

  //Calling my ending image
    image(enderImage, 0, 0, width, height);
    fill(128,255,188);
    //The score of how many aliens you kill will display in a larger font in...
    //...the center position
    text(player.score ,250, 235)
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
      player.handleEating(aliens);
      lazer.handleZap(aliens);
      lazer.display();
      lazer.move();
      //The score will display in the top right of the screen
      fill(161, 156, 228);
      text(player.score ,400,50);

    }


  }

  //Defining the function which lets the player click the starter screen...
  //...to trigger the beginning of the game

  function mouseClicked(){
    if (mouseX > 0 && mouseY > 0){
      gameBegin = false;
    }
  }
